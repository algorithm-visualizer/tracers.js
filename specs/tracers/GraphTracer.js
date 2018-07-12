export default {
  name: 'GraphTracer',
  description: 'Visualize an adjacency matrix into a graph.',
  methods: [{
    name: 'set',
    description: 'Set `array2d` to visualize.',
    arguments: [
      { name: 'array2d', type: 'Object[][]', default: '[]' },
    ],
  }, {
    name: 'reset',
    description: 'Reset data.',
    arguments: [],
  }, {
    name: 'delay',
    description: 'Pause to show changes in all tracers.',
    arguments: [],
  }, {
    name: 'directed',
    description: 'Make the graph directed.',
    arguments: [
      { name: 'isDirected', type: 'Boolean', default: 'true' },
    ],
  }, {
    name: 'weighted',
    description: 'Make the graph weighted.',
    arguments: [
      { name: 'isWeighted', type: 'Boolean', default: 'true' },
    ],
  }, {
    name: 'addNode',
    description: 'Add a node.',
    arguments: [
      { name: 'id', type: 'Object' },
      { name: 'weight', type: 'Number', default: 'null' },
      { name: 'visitedCount', type: 'Number', default: '0' },
      { name: 'selectedCount', type: 'Number', default: '0' },
      { name: 'x', type: 'Number', default: '0' },
      { name: 'y', type: 'Number', default: '0' },
    ],
  }, {
    name: 'addEdge',
    description: 'Add an edge connecting from `source` to `target`.',
    arguments: [
      { name: 'source', type: 'Object' },
      { name: 'target', type: 'Object' },
      { name: 'weight', type: 'Number', default: 'null' },
      { name: 'visitedCount', type: 'Number', default: '0' },
      { name: 'selectedCount', type: 'Number', default: '0' },
    ],
  }, {
    name: 'layoutCircle',
    description: 'Arrange nodes on a circular layout.',
    arguments: [],
  }, {
    name: 'layoutTree',
    description: 'Arrange nodes on a tree layout having `root` as its root node.',
    arguments: [
      { name: 'root', type: 'Object', default: '0' },
      { name: 'sorted', type: 'Boolean', default: 'false' },
    ],
  }, {
    name: 'layoutRandom',
    description: 'Arrange nodes randomly.',
    arguments: [],
  }, {
    name: 'visit',
    description: 'Visit `target` from `source`.',
    arguments: [
      { name: 'target', type: 'Object' },
      { name: 'source', type: 'Object', default: 'null' },
      { name: 'weight', type: 'Number', default: 'null' },
    ],
  }, {
    name: 'leave',
    description: 'Return from `target` to `source`.',
    arguments: [
      { name: 'target', type: 'Object' },
      { name: 'source', type: 'Object', default: 'null' },
      { name: 'weight', type: 'Number', default: 'null' },
    ],
  }, {
    name: 'select',
    description: 'Select `target` from `source`.',
    arguments: [
      { name: 'target', type: 'Object' },
      { name: 'source', type: 'Object', default: 'null' },
    ],
  }, {
    name: 'deselect',
    description: 'Stop selecting `target` from `source`.',
    arguments: [
      { name: 'target', type: 'Object' },
      { name: 'source', type: 'Object', default: 'null' },
    ],
  }, {
    name: 'log',
    description: 'Log graph traversals.',
    arguments: [
      { name: 'logTracer', type: 'LogTracer' },
    ],
  }],
};