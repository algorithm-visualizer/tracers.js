export default {
  name: 'Randomize.Graph',
  description: 'Create a random adjacency matrix.',
  methods: [{
    name: 'Randomize.Graph',
    description: 'The graph would have `N` nodes and roughly `ratio` * 100% of all the possible edges, and the weight of each edge would be randomized by `randomizer`.',
    return: 'new',
    arguments: [
      { name: 'N', type: 'int', default: '5' },
      { name: 'ratio', type: 'double', default: '.3' },
      { name: 'randomizer', type: 'Randomizer', default: 'new Integer()' },
    ],
  }, {
    name: 'directed',
    description: 'The graph would be directed if `directed` is `true`.',
    return: 'Randomize.Graph',
    arguments: [
      { name: 'directed', type: 'boolean', default: 'true' },
    ],
  }, {
    name: 'weighted',
    description: 'The graph would be weighted if `weighted` is `true`.',
    return: 'Randomize.Graph',
    arguments: [
      { name: 'weighted', type: 'boolean', default: 'true' },
    ],
  }, {
    name: 'create',
    description: 'Create a random adjacency matrix.',
    return: 'Object[][]',
    arguments: [],
  }],
};