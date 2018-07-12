export default {
  name: 'Randomize.Array1D',
  description: 'Create a random one-dimensional array.',
  methods: [{
    name: 'Randomize.Array1D',
    description: 'The array would have a size of `N`, and each value would be randomized by `randomizer`.',
    return: 'new',
    arguments: [
      { name: 'N', type: 'int', default: '10' },
      { name: 'randomizer', type: 'Randomizer', default: 'new Integer()' },
    ],
  }, {
    name: 'sorted',
    description: 'The array would be sorted if `sorted` is `true`.',
    return: 'Randomize.Array1D',
    arguments: [
      { name: 'sorted', type: 'boolean', default: 'true' },
    ],
  }, {
    name: 'create',
    description: 'Create a random one-dimensional array.',
    return: 'Object[]',
    arguments: [],
  }],
};