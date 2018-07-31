import path from 'path';
import { execute } from '/common/util';

class Executer {
  constructor({ name, compileCommand, runCommand }) {
    this.name = name;
    this.compileCommand = compileCommand;
    this.runCommand = runCommand;
    this.compile = this.compile.bind(this);
    this.run = this.run.bind(this);
  }

  get cwd() {
    return path.resolve(__dirname, this.name);
  }

  execute(tempPath, command) {
    const imageTag = `${this.name}-executer`;
    return execute(`docker build -t ${imageTag} ./executer`, this.cwd)
    // TODO: memory limit + time limit + space limit?
      .then(() => execute([
        `docker run --rm`,
        '-w=/usr/judge',
        `-v=$PWD/tracers:/usr/bin/tracers:ro`,
        `-v=${tempPath}:/usr/judge:rw`,
        `-e MAX_TRACES=${1e6} -e MAX_TRACERS=${1e2}`, // Load from /common/config
        imageTag,
        `"${command}"`,
      ].join(' '), this.cwd));
  }

  compile(tempPath) {
    return this.execute(tempPath, this.compileCommand);
  }

  run(tempPath) {
    return this.execute(tempPath, this.runCommand);
  }
}

export default Executer;
