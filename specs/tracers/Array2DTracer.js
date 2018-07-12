export default {
  name: 'Array2DTracer',
  description: 'Visualize a two-dimensional array into a table.',
  methods: [{
    name: 'constructor',
    description: 'Create an Array2DTracer object.',
    return: 'Array2DTracer',
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
      { name: 'x', type: 'Number' },
      { name: 'y', type: 'Number' },
      { name: 'v', type: 'Object' },
    ],
  }, {
    name: 'depatch',
    description: 'Stop notifying that the value at (`x`, `y`) has been changed.',
    return: 'Array2DTracer',
    arguments: [
      { name: 'x', type: 'Number' },
      { name: 'y', type: 'Number' },
    ],
  }, {
    name: 'select',
    description: 'Select (`x`, `y`).',
    return: 'Array2DTracer',
    arguments: [
      { name: 'x', type: 'Number' },
      { name: 'y', type: 'Number' },
    ],
  }, {
    name: 'select',
    description: 'Select from (`sx`, `sy`) to (`ex`, `ey`).',
    return: 'Array2DTracer',
    arguments: [
      { name: 'sx', type: 'Number' },
      { name: 'sy', type: 'Number' },
      { name: 'ex', type: 'Number' },
      { name: 'ey', type: 'Number' },
    ],
  }, {
    name: 'selectRow',
    description: 'Select from (`x`, `sy`) to (`x`, `ey`).',
    return: 'Array2DTracer',
    arguments: [
      { name: 'x', type: 'Number' },
      { name: 'sy', type: 'Number' },
      { name: 'ey', type: 'Number' },
    ],
  }, {
    name: 'selectCol',
    description: 'Select from (`sx`, `y`) to (`ex`, `y`).',
    return: 'Array2DTracer',
    arguments: [
      { name: 'y', type: 'Number' },
      { name: 'sx', type: 'Number' },
      { name: 'ex', type: 'Number' },
    ],
  }, {
    name: 'deselect',
    description: 'Stop selecting (`x`, `y`).',
    return: 'Array2DTracer',
    arguments: [
      { name: 'x', type: 'Number' },
      { name: 'y', type: 'Number' },
    ],
  }, {
    name: 'deselect',
    description: 'Stop selecting from (`sx`, `sy`) to (`ex`, `ey`).',
    return: 'Array2DTracer',
    arguments: [
      { name: 'sx', type: 'Number' },
      { name: 'sy', type: 'Number' },
      { name: 'ex', type: 'Number' },
      { name: 'ey', type: 'Number' },
    ],
  }, {
    name: 'deselectRow',
    description: 'Stop selecting from (`x`, `sy`) to (`x`, `ey`).',
    return: 'Array2DTracer',
    arguments: [
      { name: 'x', type: 'Number' },
      { name: 'sy', type: 'Number' },
      { name: 'ey', type: 'Number' },
    ],
  }, {
    name: 'deselectCol',
    description: 'Stop selecting from (`sx`, `y`) to (`ex`, `y`).',
    return: 'Array2DTracer',
    arguments: [
      { name: 'y', type: 'Number' },
      { name: 'sx', type: 'Number' },
      { name: 'ex', type: 'Number' },
    ],
  }],
};