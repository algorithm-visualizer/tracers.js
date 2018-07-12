export default {
  name: 'ChartTracer',
  description: 'Visualize a one-dimensional array into a bar chart.',
  methods: [{
    name: 'set',
    description: 'Set `array1d` to visualize.',
    arguments: [
      { name: 'array1d', type: 'Object[]' },
    ],
  }, {
    name: 'reset',
    description: 'Reset data.',
    arguments: [],
  }, {
    name: 'delay',
    description: 'Pause to show changes in data.',
    arguments: [],
  }, {
    name: 'patch',
    description: 'Notify that the value at (`x`) has been changed to `v`.',
    arguments: [
      { name: 'x', type: 'Number' },
      { name: 'v', type: 'Object' },
    ],
  }, {
    name: 'depatch',
    description: 'Stop notifying that the value at (`x`) has been changed.',
    arguments: [
      { name: 'x', type: 'Number' },
    ],
  }, {
    name: 'select',
    description: 'Select (`x`).',
    arguments: [
      { name: 'x', type: 'Number' },
    ],
  }, {
    name: 'select',
    description: 'Select from (`sx`) to (`ex`).',
    arguments: [
      { name: 'sx', type: 'Number' },
      { name: 'ex', type: 'Number' },
    ],
  }, {
    name: 'deselect',
    description: 'Stop selecting (`x`).',
    arguments: [
      { name: 'x', type: 'Number' },
    ],
  }, {
    name: 'deselect',
    description: 'Stop selecting from (`sx`) to (`ex`).',
    arguments: [
      { name: 'sx', type: 'Number' },
      { name: 'ex', type: 'Number' },
    ],
  }, {
    name: 'chart',
    description: 'Synchronize data with `chartTracer`.',
    arguments: [
      { name: 'chartTracer', type: 'ChartTracer' },
    ],
  }],
};