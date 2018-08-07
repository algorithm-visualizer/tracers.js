import ghRelease from 'gh-release';
import Promise from 'bluebird';
import { version } from '/package.json';
import { execute } from '/common/util';

const { GITHUB_TOKEN } = process.env;
const release = Promise.promisify(ghRelease);

release({ owner: 'algorithm-visualizer', repo: 'tracers', auth: { token: GITHUB_TOKEN } })
  .catch(error => {
    console.error(error);
    throw error;
  })
  .then(() => execute([
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
  ].join(' && '), __dirname))
  .catch(() => process.exit(1));