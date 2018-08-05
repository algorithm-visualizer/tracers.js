import path from 'path';
import fs from 'fs-extra';
import * as tracers from '/specs/tracers';
import * as randomizers from '/specs/randomizers';
import { execute } from '/common/util';
import Commander from '/languages/Commander';

class Builder extends Commander {
  constructor({ name, commands }) {
    super({ name });
    this.commands = commands;
    this.build = this.build.bind(this);
  }

  spec(callback, all = false) {
    Object.values(all ? { ...tracers, ...randomizers } : tracers).forEach(tracer => {
      const { name, content } = callback(tracer);
      const outputPath = path.resolve(this.cwd, 'tracers', name);
      fs.writeFileSync(outputPath, content);
    });
    return this;
  }

  index(callback, all = false) {
    const { name, content } = callback(Object.values(all ? { ...tracers, ...randomizers } : tracers));
    const outputPath = path.resolve(this.cwd, 'tracers', name);
    fs.writeFileSync(outputPath, content);
    return this;
  }

  build() {
    return fs.pathExists(path.resolve(this.cwd, 'builder', 'Dockerfile'))
      .then(exists => {
        const command = this.commands.join(' && ');
        if (exists) {
          return execute(`docker build -t ${this.builderImageTag} ./builder`, this.cwd)
            .then(() => execute([
              `docker run --rm`,
              '-w=/usr/tracers',
              `-v=$PWD/tracers:/usr/tracers:rw`,
              this.builderImageTag,
              '/bin/bash -c',
              `"${command}"`,
            ].join(' '), this.cwd));
        } else if (command) {
          return execute(command, path.resolve(this.cwd, 'tracers'));
        }
      })
      .then(() => fs.pathExists(path.resolve(this.cwd, 'executer', 'Dockerfile')))
      .then(exists => exists && execute(`docker build -t ${this.executerImageTag} ./executer`, this.cwd));
  }
}

export default Builder;
