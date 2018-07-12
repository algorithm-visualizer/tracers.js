export default {
  name: 'String',
  description: 'Create a random string.',
  methods: [{
    name: 'constructor',
    description: 'The string would have a length of `length` and be composed of `letters`.',
    arguments: [
      { name: 'length', type: 'Number', default: '16' },
      { name: 'letters', type: 'String', default: 'abcdefghijklmnopqrstuvwxyz' },
    ],
  }, {
    name: 'create',
    description: 'Create a random string.',
    arguments: [],
  }],
};