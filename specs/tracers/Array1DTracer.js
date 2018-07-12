export default { // TODO: fix types (i.e. Number => int)
  name: 'Array1DTracer',
  description: 'Visualize a one-dimensional array into a table.',
  methods: [{
    name: 'Array1DTracer',
    description: 'Create an Array1DTracer object.',
    return: 'new',
    arguments: [
      { name: 'title', type: 'String', default: '\"Array1DTracer\"' },
    ],
  }, {
    name: 'set',
    description: 'Set `array1d` to visualize.',
    return: 'Array1DTracer',
    arguments: [
      { name: 'array1d', type: 'Object[]', default: '[]' },
    ],
  }, {
    name: 'reset',
    description: 'Reset data.',
    return: 'Array1DTracer',
    arguments: [],
  }, {
    name: 'delay',
    description: 'Pause to show changes in all tracers.',
    return: 'Array1DTracer',
    arguments: [],
  }, {
    name: 'patch',
    description: 'Notify that the value at (`x`) has been changed to `v`.',
    return: 'Array1DTracer',
    arguments: [
      { name: 'x', type: 'Number' },
      { name: 'v', type: 'Object' },
    ],
  }, {
    name: 'depatch',
    description: 'Stop notifying that the value at (`x`) has been changed.',
    return: 'Array1DTracer',
    arguments: [
      { name: 'x', type: 'Number' },
    ],
  }, {
    name: 'select',
    description: 'Select (`x`).',
    return: 'Array1DTracer',
    arguments: [
      { name: 'x', type: 'Number' },
    ],
  }, {
    name: 'select',
    description: 'Select from (`sx`) to (`ex`).',
    return: 'Array1DTracer',
    arguments: [
      { name: 'sx', type: 'Number' },
      { name: 'ex', type: 'Number' },
    ],
  }, {
    name: 'deselect',
    description: 'Stop selecting (`x`).',
    return: 'Array1DTracer',
    arguments: [
      { name: 'x', type: 'Number' },
    ],
  }, {
    name: 'deselect',
    description: 'Stop selecting from (`sx`) to (`ex`).',
    return: 'Array1DTracer',
    arguments: [
      { name: 'sx', type: 'Number' },
      { name: 'ex', type: 'Number' },
    ],
  }, {
    name: 'chart',
    description: 'Synchronize data with `chartTracer`.',
    return: 'Array1DTracer',
    arguments: [
      { name: 'chartTracer', type: 'ChartTracer' },
    ],
  }],
};