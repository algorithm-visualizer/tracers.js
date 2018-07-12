export default {
  name: 'Array1D',
  description: 'Create a random one-dimensional array.',
  methods: [{
    name: 'constructor',
    description: 'The array would have a size of `N`, and each value would be randomized by `randomizer`.',
    arguments: [
      { name: 'N', type: 'Number', default: '10' },
      { name: 'randomizer', type: 'Randomizer', default: 'new Integer()' },
    ],
  }, {
    name: 'sorted',
    description: 'The array would be sorted if `sorted` is `true`.',
    arguments: [
      { name: 'sorted', type: 'Boolean', default: 'true' },
    ],
  }, {
    name: 'create',
    description: 'Create a random one-dimensional array.',
    arguments: [],
  }],
};