import path from 'path';
import fs from 'fs-extra';
import * as tracers from '/specs/tracers';
import Commander from '/languages/Commander';
import { execute } from '/common/util';

class Builder extends Commander {
  constructor({ name, commands }) {
    super({ name });
    this.commands = commands;
    this.specs = [];
    this.indices = [];
    this.build = this.build.bind(this);
  }

  spec(callback) {
    this.specs.push(callback);
    return this;
  }

  index(callback) {
    this.indices.push(callback);
    return this;
  }

  build() {
    const tracersPath = path.resolve(this.cwd, 'tracers');
    return fs.remove(tracersPath)
      .then(() => fs.copy(path.resolve(this.cwd, 'builder', 'skeleton'), tracersPath))
      .then(() => {
        for (const spec of this.specs) {
          for (const tracer of Object.values(tracers)) {
            const { name, content } = spec(tracer);
            const outputPath = path.resolve(tracersPath, name);
            fs.writeFileSync(outputPath, content);
          }
        }
        for (const index of this.indices) {
          const { name, content } = index(Object.values(tracers));
          const outputPath = path.resolve(tracersPath, name);
          fs.writeFileSync(outputPath, content);
        }
      })
      .then(() => fs.pathExists(path.resolve(this.cwd, 'builder', 'Dockerfile')))
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
        } else {
          return execute(command, tracersPath);
        }
      })
      .then(() => fs.pathExists(path.resolve(this.cwd, 'executor', 'Dockerfile')))
      .then(exists => exists && execute(`docker build -t ${this.executorImageTag} ./executor`, this.cwd));
  }
}

export default Builder;
