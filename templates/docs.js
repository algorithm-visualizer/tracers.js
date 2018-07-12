import path from 'path';
import fs from 'fs';
import * as tracers from '../specs/tracers';

const srcPath = path.resolve(__dirname, '../docs');
Object.values(tracers).forEach(tracer => {
  const outputPath = path.resolve(srcPath, `${tracer.name}.md`);

  const content = `# ${tracer.name};

${tracer.description}

## Methods
${tracer.methods.map(method => `
`).join('\n')}
`;

  fs.writeFileSync(outputPath, content);
});