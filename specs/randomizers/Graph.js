export default {
  name: 'Graph',
  description: 'Create a random adjacency matrix.',
  methods: [{
    name: 'constructor',
    description: 'The graph would have `N` nodes and roughly `ratio` * 100% of all the possible edges, and the weight of each edge would be randomized by `randomizer`.',
    arguments: [
      { name: 'N', type: 'Number', default: '5' },
      { name: 'ratio', type: 'Number', default: '.3' },
      { name: 'randomizer', type: 'Randomizer', default: 'new Integer()' },
    ],
  }, {
    name: 'directed',
    description: 'The graph would be directed if `directed` is `true`.',
    arguments: [
      { name: 'directed', type: 'Boolean', default: 'true' },
    ],
  }, {
    name: 'weighted',
    description: 'The graph would be weighted if `weighted` is `true`.',
    arguments: [
      { name: 'weighted', type: 'Boolean', default: 'true' },
    ],
  }, {
    name: 'create',
    description: 'Create a random adjacency matrix.',
    arguments: [],
  }],
};