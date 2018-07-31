import child_process from 'child_process';
import ghRelease from 'gh-release';
import { version } from '/package.json';

const { GITHUB_TOKEN } = process.env;
ghRelease({
  owner: 'algorithm-visualizer',
  repo: 'tracers',
  auth: { token: GITHUB_TOKEN },
}, err => {
  if (err) throw err;
  const docsProcess = child_process.exec([
    'rm -rf tracers.wiki',
    'git clone git@github.com:algorithm-visualizer/tracers.wiki.git',
    'rm tracers.wiki/*',
    'cp ../languages/docs/tracers/* tracers.wiki',
    'cd tracers.wiki',
    'git add .',
    `git diff-index --quiet HEAD || git commit -m 'Release v${version}'`,
    'git push origin master',
    'cd ..',
    'rm -rf tracers.wiki',
  ].join(' && '), { cwd: __dirname });
  docsProcess.stdout.pipe(process.stdout);
  docsProcess.stderr.pipe(process.stderr);
  docsProcess.on('exit', process.exit);
});