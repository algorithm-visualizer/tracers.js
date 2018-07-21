export default {
  name: 'Randomize.Double',
  description: 'Create a random real number.',
  methods: [{
    name: 'Randomize.Double',
    description: 'The real number would be between `min` (inclusive) and `max` (exclusive).',
    return: 'new',
    arguments: [
      { name: 'min', type: 'double', default: '0' },
      { name: 'max', type: 'double', default: '1' },
    ],
  }, {
    name: 'create',
    description: 'Create a random real number.',
    return: 'double',
    arguments: [],
  }],
};