export default {
  name: 'Array2D',
  description: 'Create a random two-dimensional array.',
  methods: [{
    name: 'constructor',
    description: 'The array would have a size of `N` x `M`, and each value would be randomized by `randomizer`.',
    arguments: [
      { name: 'N', type: 'Number', default: '10' },
      { name: 'M', type: 'Number', default: '10' },
      { name: 'randomizer', type: 'Randomizer', default: 'new Integer()' },
    ],
  }, {
    name: 'sorted',
    description: 'Each row of the array would be sorted if `sorted` is `true`.',
    arguments: [
      { name: 'sorted', type: 'Boolean', default: 'true' },
    ],
  }, {
    name: 'create',
    description: 'Create a random two-dimensional array.',
    arguments: [],
  }],
};