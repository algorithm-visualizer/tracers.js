export default {
  name: 'Randomize.String',
  description: 'Create a random string.',
  methods: [{
    name: 'Randomize.String',
    description: 'The string would have a length of `length` and be composed of `letters`.',
    return: 'new',
    arguments: [
      { name: 'length', type: 'int', default: '16' },
      { name: 'letters', type: 'String', default: '\"abcdefghijklmnopqrstuvwxyz\"' },
    ],
  }, {
    name: 'create',
    description: 'Create a random string.',
    return: 'String',
    arguments: [],
  }],
};