import { execute } from '/common/util';
import Commander from '/languages/Commander';

class Executer extends Commander {
  constructor({ name, compileCommand, runCommand }) {
    super({ name });
    this.compileCommand = compileCommand;
    this.runCommand = runCommand;
    this.compile = this.compile.bind(this);
    this.run = this.run.bind(this);
  }

  execute(tempPath, command) {
    // TODO: memory limit + time limit + space limit?
    return execute([
      `docker run --rm`,
      '-w=/usr/judge',
      `-v=$PWD/tracers:/usr/bin/tracers:ro`,
      `-v=${tempPath}:/usr/judge:rw`,
      `-e MAX_TRACES=${1e6} -e MAX_TRACERS=${1e2}`, // TODO: load from /common/config
      this.executerImageTag,
      '/bin/bash -c',
      `"${command}"`,
    ].join(' '), this.cwd);
  }

  compile(tempPath) {
    return this.execute(tempPath, this.compileCommand);
  }

  run(tempPath) {
    return this.execute(tempPath, this.runCommand);
  }
}

export default Executer;
