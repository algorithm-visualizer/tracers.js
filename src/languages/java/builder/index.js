import Builder from '../../Builder';

const builder = new Builder({
  name: 'java',
  commands: [
    'gradle -g ./.gradle shadowJar',
  ],
}).spec(tracer => {
  const name = `src/main/java/org/algorithm_visualizer/tracers/${tracer.name}.java`;
  const content = `package org.algorithm_visualizer.tracers;

public class ${tracer.name} extends Tracer {
    public ${tracer.name}(String title) {
        super(title);
    }

    public ${tracer.name}() {
        this(null);
    }
${tracer.methods.filter(method => method.return !== 'new').map(method => {
    const optionals = method.arguments.filter(argument => argument.default);
    const definitions = [];
    for (let i = 0; i <= optionals.length; i++) {
      const args = method.arguments.slice(0, method.arguments.length - i);
      definitions.push(`
    public ${method.return} ${method.name}(${args.map(argument => `${argument.type.startsWith('Object[]') ? 'Object' : argument.type} ${argument.name}`).join(', ')}) {
        addTrace(key, "${method.name}", new Object[]{${args.map(argument => argument.type.endsWith('Tracer') ? `${argument.name}.key` : argument.name).join(', ')}});
        return this;
    }`);
    }
    return definitions.join('\n');
  }).join('\n')}
}`;

  return { name, content };
});

export default builder;