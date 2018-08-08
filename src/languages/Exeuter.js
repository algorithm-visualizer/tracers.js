import { execute } from '/common/util';
import Commander from '/languages/Commander';
import { maxTracers, maxTraces } from '/common/config';

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
      `-e MAX_TRACES=${maxTraces} -e MAX_TRACERS=${maxTracers}`,
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
