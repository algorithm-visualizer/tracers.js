export default {
  name: 'Integer',
  description: 'Create a random integer.',
  methods: [{
    name: 'constructor',
    description: 'The integer would be between `min` and `max` inclusive.',
    arguments: [
      { name: 'min', type: 'Number', default: '1' },
      { name: 'max', type: 'Number', default: '9' },
    ],
  }, {
    name: 'create',
    description: 'Create a random integer.',
    arguments: [],
  }],
};