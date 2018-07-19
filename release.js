import child_process from 'child_process';
import ghRelease from 'gh-release';
import { version } from './package.json';

const { GITHUB_TOKEN } = process.env;

ghRelease({
  owner: 'algorithm-visualizer',
  repo: 'tracers',
  auth: { token: GITHUB_TOKEN },
}, err => {
  if (err) throw err;
  const docsProcess = child_process.exec([
    'cd libs',
    'rm -rf tracers.wiki',
    'git clone git@github.com:algorithm-visualizer/tracers.wiki.git',
    'cd tracers.wiki',
    'rm *',
    'cp ../docs/* .',
    'git add .',
    `git diff-index --quiet HEAD || git commit -m 'Release v${version}'`,
    'git push origin master',
  ].join(' && '), { cwd: __dirname });
  docsProcess.stdout.pipe(process.stdout);
  docsProcess.stderr.pipe(process.stderr);
  docsProcess.on('exit', process.exit);
});