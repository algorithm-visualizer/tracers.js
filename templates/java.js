import { java } from '../config';

java.spec(tracer => {
  const methodNames = [...new Set(tracer.methods.map(method => method.name))];

  const name = `${tracer.name}.java`;
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

  return { name, content };
}).build();