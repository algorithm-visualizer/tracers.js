export default {
  name: 'Array2DTracer',
  description: 'Visualize a two-dimensional array into a table.',
  methods: [{
    name: 'Array2DTracer',
    description: 'Create an Array2DTracer object.',
    return: 'new',
    arguments: [
      { name: 'title', type: 'String', default: '\"Array2DTracer\"' },
    ],
  }, {
    name: 'set',
    description: 'Set `array2d` to visualize.',
    return: 'Array2DTracer',
    arguments: [
      { name: 'array2d', type: 'Object[][]', default: '[]' },
    ],
  }, {
    name: 'reset',
    description: 'Reset data.',
    return: 'Array2DTracer',
    arguments: [],
  }, {
    name: 'delay',
    description: 'Pause to show changes in all tracers.',
    return: 'Array2DTracer',
    arguments: [],
  }, {
    name: 'patch',
    description: 'Notify that the value at (`x`, `y`) has been changed to `v`.',
    return: 'Array2DTracer',
    arguments: [
      { name: 'x', type: 'int' },
      { name: 'y', type: 'int' },
      { name: 'v', type: 'Object' },
    ],
  }, {
    name: 'depatch',
    description: 'Stop notifying that the value at (`x`, `y`) has been changed.',
    return: 'Array2DTracer',
    arguments: [
      { name: 'x', type: 'int' },
      { name: 'y', type: 'int' },
    ],
  }, {
    name: 'select',
    description: 'Select (`x`, `y`).',
    return: 'Array2DTracer',
    arguments: [
      { name: 'x', type: 'int' },
      { name: 'y', type: 'int' },
    ],
  }, {
    name: 'select',
    description: 'Select from (`sx`, `sy`) to (`ex`, `ey`).',
    return: 'Array2DTracer',
    arguments: [
      { name: 'sx', type: 'int' },
      { name: 'sy', type: 'int' },
      { name: 'ex', type: 'int' },
      { name: 'ey', type: 'int' },
    ],
  }, {
    name: 'selectRow',
    description: 'Select from (`x`, `sy`) to (`x`, `ey`).',
    return: 'Array2DTracer',
    arguments: [
      { name: 'x', type: 'int' },
      { name: 'sy', type: 'int' },
      { name: 'ey', type: 'int' },
    ],
  }, {
    name: 'selectCol',
    description: 'Select from (`sx`, `y`) to (`ex`, `y`).',
    return: 'Array2DTracer',
    arguments: [
      { name: 'y', type: 'int' },
      { name: 'sx', type: 'int' },
      { name: 'ex', type: 'int' },
    ],
  }, {
    name: 'deselect',
    description: 'Stop selecting (`x`, `y`).',
    return: 'Array2DTracer',
    arguments: [
      { name: 'x', type: 'int' },
      { name: 'y', type: 'int' },
    ],
  }, {
    name: 'deselect',
    description: 'Stop selecting from (`sx`, `sy`) to (`ex`, `ey`).',
    return: 'Array2DTracer',
    arguments: [
      { name: 'sx', type: 'int' },
      { name: 'sy', type: 'int' },
      { name: 'ex', type: 'int' },
      { name: 'ey', type: 'int' },
    ],
  }, {
    name: 'deselectRow',
    description: 'Stop selecting from (`x`, `sy`) to (`x`, `ey`).',
    return: 'Array2DTracer',
    arguments: [
      { name: 'x', type: 'int' },
      { name: 'sy', type: 'int' },
      { name: 'ey', type: 'int' },
    ],
  }, {
    name: 'deselectCol',
    description: 'Stop selecting from (`sx`, `y`) to (`ex`, `y`).',
    return: 'Array2DTracer',
    arguments: [
      { name: 'y', type: 'int' },
      { name: 'sx', type: 'int' },
      { name: 'ex', type: 'int' },
    ],
  }],
};