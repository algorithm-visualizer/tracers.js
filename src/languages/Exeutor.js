import { execute } from '/common/util';
import Commander from '/languages/Commander';
import { maxTracers, maxTraces, memoryLimit, timeLimit } from '/common/config';
import uuid from 'uuid';

class Executor extends Commander {
  constructor({ name, compileCommand, runCommand }) {
    super({ name });
    this.compileCommand = compileCommand;
    this.runCommand = runCommand;
    this.compile = this.compile.bind(this);
    this.run = this.run.bind(this);
  }

  execute(tempPath, command) {
    const containerName = uuid.v4();
    let killed = false;
    const timer = setTimeout(() => {
      execute(`docker kill ${containerName}`, this.cwd).then(() => {
        killed = true;
      });
    }, timeLimit);
    return execute([
      `docker run --rm`,
      `--name=${containerName}`,
      '-w=/usr/judge',
      `-v=$PWD/tracers:/usr/bin/tracers:ro`,
      `-v=${tempPath}:/usr/judge:rw`,
      `-m=${memoryLimit}m --memory-swap=${memoryLimit}m`, // TODO: needs to be tested on linux
      `-e MAX_TRACES=${maxTraces} -e MAX_TRACERS=${maxTracers}`,
      this.executorImageTag,
      '/bin/bash -c',
      `"${command}"`,
    ].join(' '), this.cwd).catch(error => {
      if (killed) console.error('Time Limit Exceeded');
      throw error;
    }).finally(() => clearTimeout(timer));
  }

  compile(tempPath) {
    return this.execute(tempPath, this.compileCommand);
  }

  run(tempPath) {
    return this.execute(tempPath, this.runCommand);
  }
}

export default Executor;
