export default {
  name: 'Array2DTracer',
  description: 'Visualize a two-dimensional array into a table.',
  methods: [{
    name: 'set',
    description: 'Set `array2d` to visualize.',
    arguments: [
      { name: 'array2d', type: 'Object[][]', default: '[]' },
    ],
  }, {
    name: 'reset',
    description: 'Reset data.',
    arguments: [],
  }, {
    name: 'delay',
    description: 'Pause to show changes in all tracers.',
    arguments: [],
  }, {
    name: 'patch',
    description: 'Notify that the value at (`x`, `y`) has been changed to `v`.',
    arguments: [
      { name: 'x', type: 'Number' },
      { name: 'y', type: 'Number' },
      { name: 'v', type: 'Object' },
    ],
  }, {
    name: 'depatch',
    description: 'Stop notifying that the value at (`x`, `y`) has been changed.',
    arguments: [
      { name: 'x', type: 'Number' },
      { name: 'y', type: 'Number' },
    ],
  }, {
    name: 'select',
    description: 'Select (`x`, `y`).',
    arguments: [
      { name: 'x', type: 'Number' },
      { name: 'y', type: 'Number' },
    ],
  }, {
    name: 'select',
    description: 'Select from (`sx`, `sy`) to (`ex`, `ey`).',
    arguments: [
      { name: 'sx', type: 'Number' },
      { name: 'sy', type: 'Number' },
      { name: 'ex', type: 'Number' },
      { name: 'ey', type: 'Number' },
    ],
  }, {
    name: 'selectRow',
    description: 'Select from (`x`, `sy`) to (`x`, `ey`).',
    arguments: [
      { name: 'x', type: 'Number' },
      { name: 'sy', type: 'Number' },
      { name: 'ey', type: 'Number' },
    ],
  }, {
    name: 'selectCol',
    description: 'Select from (`sx`, `y`) to (`ex`, `y`).',
    arguments: [
      { name: 'y', type: 'Number' },
      { name: 'sx', type: 'Number' },
      { name: 'ex', type: 'Number' },
    ],
  }, {
    name: 'deselect',
    description: 'Stop selecting (`x`, `y`).',
    arguments: [
      { name: 'x', type: 'Number' },
      { name: 'y', type: 'Number' },
    ],
  }, {
    name: 'deselect',
    description: 'Stop selecting from (`sx`, `sy`) to (`ex`, `ey`).',
    arguments: [
      { name: 'sx', type: 'Number' },
      { name: 'sy', type: 'Number' },
      { name: 'ex', type: 'Number' },
      { name: 'ey', type: 'Number' },
    ],
  }, {
    name: 'deselectRow',
    description: 'Stop selecting from (`x`, `sy`) to (`x`, `ey`).',
    arguments: [
      { name: 'x', type: 'Number' },
      { name: 'sy', type: 'Number' },
      { name: 'ey', type: 'Number' },
    ],
  }, {
    name: 'deselectCol',
    description: 'Stop selecting from (`sx`, `y`) to (`ex`, `y`).',
    arguments: [
      { name: 'y', type: 'Number' },
      { name: 'sx', type: 'Number' },
      { name: 'ex', type: 'Number' },
    ],
  }],
};