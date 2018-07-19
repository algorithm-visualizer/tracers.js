import { docsCommander } from '../commanders';

// TODO: consider writing in typescript
docsCommander.spec(tracer => {
  const name = `${tracer.name}.md`;
  const content = `# ${tracer.name}

${tracer.description} [Usage](https://github.com/search?q=${tracer.name}+repo%3Aalgorithm-visualizer%2Falgorithms&type=Code)

## Methods

<table>
  <thead>
    <th>Name</th>
    <th>Description</th>
    <th></th>
  </thead>
  <tbody>${tracer.methods.map(method => `
    <tr>
      <td align="right"><b>${method.name}</b></td>
      <td>${method.description.replace(/`(\w+)`/g, (match, p1) => `<code>${p1}</code>`)}</td>
      <td><a href="https://github.com/search?q=${tracer.name}+${method.name}+repo%3Aalgorithm-visualizer%2Falgorithms&type=Code">Usage</a></td>
    </tr>
    <tr>
      <td colspan="3">
        <pre lang="java">${method.return} ${method.name}(${method.arguments.map(argument => `${argument.type} ${argument.name}${argument.default ? ` = ${argument.default}` : ''}`).join(', ')})</pre>
      </td>
    </tr>`).join('')}
  </tbody>
</table>`;

  return { name, content };
}, true).build();