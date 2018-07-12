import path from 'path';
import fs from 'fs';
import * as tracers from '../specs/tracers';
import { java as javaPaths } from '../paths';

const srcPath = path.resolve(__dirname, '..', javaPaths.src);
Object.values(tracers).forEach(tracer => {
  const outputPath = path.resolve(srcPath, `${tracer.name}.java`);
  const methodNames = [...new Set(tracer.methods.map(method => method.name))];

  const content = `package org.algorithm_visualizer.tracers;

public class ${tracer.name} extends Tracer {
    public ${tracer.name}(String title) {
        super(title);
    }

    public ${tracer.name}() {
        this(null);
    }
${methodNames.map(methodName => `
    public ${tracer.name} ${methodName}(Object... args) {
        addTrace(key, "${methodName}", args);
        return this;
    }`).join('\n')}
}`;

  fs.writeFileSync(outputPath, content);
});