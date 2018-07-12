export default {
  name: 'Randomize.Integer',
  description: 'Create a random integer.',
  methods: [{
    name: 'constructor',
    description: 'The integer would be between `min` and `max` inclusive.',
    return: 'Randomize.Integer',
    arguments: [
      { name: 'min', type: 'int', default: '1' },
      { name: 'max', type: 'int', default: '9' },
    ],
  }, {
    name: 'create',
    description: 'Create a random integer.',
    return: 'int',
    arguments: [],
  }],
};