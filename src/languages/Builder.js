import path from 'path';
import fs from 'fs-extra';
import Promise from 'bluebird';
import * as tracers from '/specs/tracers';
import * as randomizers from '/specs/randomizers';
import { execute } from '/common/util';

class Builder {
  constructor({ name, commands }) {
    this.name = name;
    this.commands = commands;
    this.build = this.build.bind(this);
  }

  get cwd() {
    return path.resolve(__dirname, this.name);
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
    const command = this.commands.join(' && ');
    if (fs.existsSync(path.resolve(this.cwd, 'builder', 'Dockerfile'))) {
      const imageTag = `${this.name}-builder`;
      return execute(`docker build -t ${imageTag} ./builder`, this.cwd)
        .then(() => execute([
          `docker run --rm`,
          '-w=/usr/tracers',
          `-v=$PWD/tracers:/usr/tracers:rw`,
          imageTag,
          '/bin/bash -c',
          `"${command}"`,
        ].join(' '), this.cwd));
    } else if (command) {
      return execute(command, path.resolve(this.cwd, 'tracers'));
    } else {
      return Promise.resolve();
    }
  }
}

export default Builder;
