import Promise from 'bluebird';
import child_process from 'child_process';

const execute = (command, cwd) => new Promise((resolve, reject) => {
  if (!cwd) return reject(new Error('CWD Not Specified'));
  const child = child_process.exec(command, { cwd }, error => {
    if (error) return reject(error);
    resolve();
  });
  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);
});

const exit = error => process.exit(1);

export {
  execute,
  exit,
};
