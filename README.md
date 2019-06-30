# tracers.js [![npm](https://img.shields.io/npm/v/algorithm-visualizer.svg?style=flat-square)](https://www.npmjs.com/package/algorithm-visualizer) [![API reference](https://img.shields.io/badge/documentation-js-red.svg?style=flat-square)](https://algorithm-visualizer.github.io/tracers.js/) [![Travis (.com)](https://img.shields.io/travis/com/algorithm-visualizer/tracers.js.svg?style=flat-square)](https://travis-ci.com/algorithm-visualizer/tracers.js)

> This repository is part of the project [Algorithm Visualizer](https://github.com/algorithm-visualizer).

`tracers.js` is a visualization library for JavaScript.
You can use it on [algorithm-visualizer.org](https://algorithm-visualizer.org/) or locally on your machine.

## Installation

```bash
npm install algorithm-visualizer
```

## Usage

```js
// import visualization libraries {
const { Array2DTracer, Layout, LogTracer, Tracer, VerticalLayout } = require('algorithm-visualizer');
// }

// define tracer variables {
const array2dTracer = new Array2DTracer('Grid');
const logTracer = new LogTracer('Console');
// }

// define input variables
const messages = [
  'Visualize',
  'your',
  'own',
  'code',
  'here!',
];

// highlight each line of messages recursively
function highlight(line) {
  if (line >= messages.length) return;
  const message = messages[line];
  // visualize {
  logTracer.println(message);
  array2dTracer.selectRow(line, 0, message.length - 1);
  Tracer.delay();
  array2dTracer.deselectRow(line, 0, message.length - 1);
  // }
  highlight(line + 1);
}

(function main() {
  // visualize {
  Layout.setRoot(new VerticalLayout([array2dTracer, logTracer]));
  array2dTracer.set(messages);
  Tracer.delay();
  // }
  highlight(0);
})();
```

Check out the [API reference](https://algorithm-visualizer.github.io/tracers.js/) for more information.

## Contributing

Check out the [contributing guidelines](https://github.com/algorithm-visualizer/tracers.js/blob/master/CONTRIBUTING.md).
