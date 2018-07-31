export default {
  name: 'Randomize.Array2D',
  description: 'Create a random two-dimensional array.',
  methods: [{
    name: 'Randomize.Array2D',
    description: 'The array would have a size of `N` x `M`, and each value would be randomized by `randomizer`.',
    return: 'new',
    arguments: [
      { name: 'N', type: 'int', default: '10' },
      { name: 'M', type: 'int', default: '10' },
      { name: 'randomizer', type: 'Randomizer', default: 'new Integer()' },
    ],
  }, {
    name: 'sorted',
    description: 'Each row of the array would be sorted if `sorted` is `true`.',
    return: 'Randomize.Array2D',
    arguments: [
      { name: 'sorted', type: 'boolean', default: 'true' },
    ],
  }, {
    name: 'create',
    description: 'Create a random two-dimensional array.',
    return: 'Object[][]',
    arguments: [],
  }],
};