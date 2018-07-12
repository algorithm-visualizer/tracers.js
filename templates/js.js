import path from 'path';
import fs from 'fs';
import * as tracers from '../specs/tracers';

const srcPath = path.resolve(__dirname, '../languages/js/src');
Object.values(tracers).forEach(tracer => {
  const outputPath = path.resolve(srcPath, `${tracer.name}.js`);
  const methodNames = [...new Set(tracer.methods.map(method => method.name))];

  const content = `import { Tracer } from './';

class ${tracer.name} extends Tracer {
  constructor(title) {
    super(title);

    this.register(${methodNames.map(methodName => `'${methodName}'`).join(', ')});
  }
}

export default ${tracer.name};`;

  fs.writeFileSync(outputPath, content);
});

const outputPath = path.resolve(srcPath, 'index.js');
const content = Object.values(tracers).map(tracer => `export { default as ${tracer.name} } from './${tracer.name}';`).join('\n');
fs.writeFileSync(outputPath, content);