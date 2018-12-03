export default {
  name: 'GraphTracer',
  description: 'Visualize an adjacency matrix into a graph.',
  methods: [{
    name: 'GraphTracer',
    description: 'Create a GraphTracer object.',
    return: 'new',
    arguments: [
      { name: 'title', type: 'String', default: '\"GraphTracer\"' },
    ],
  }, {
    name: 'set',
    description: 'Set `array2d` to visualize.',
    return: 'GraphTracer',
    arguments: [
      { name: 'array2d', type: 'Object[][]', default: '[]' },
    ],
  }, {
    name: 'reset',
    description: 'Reset data.',
    return: 'GraphTracer',
    arguments: [],
  }, {
    name: 'delay',
    description: 'Pause to show changes in all tracers.',
    return: 'GraphTracer',
    arguments: [],
  }, {
    name: 'directed',
    description: 'Make the graph directed.',
    return: 'GraphTracer',
    arguments: [
      { name: 'isDirected', type: 'boolean', default: 'true' },
    ],
  }, {
    name: 'weighted',
    description: 'Make the graph weighted.',
    return: 'GraphTracer',
    arguments: [
      { name: 'isWeighted', type: 'boolean', default: 'true' },
    ],
  }, {
    name: 'addNode',
    description: 'Add a node.',
    return: 'GraphTracer',
    arguments: [
      { name: 'id', type: 'Object' },
      { name: 'weight', type: 'double', default: 'null' },
      { name: 'x', type: 'double', default: '0' },
      { name: 'y', type: 'double', default: '0' },
      { name: 'visitedCount', type: 'int', default: '0' },
      { name: 'selectedCount', type: 'int', default: '0' },
    ],
  }, {
    name: 'updateNode',
    description: 'Update a node.',
    return: 'GraphTracer',
    arguments: [
      { name: 'id', type: 'Object' },
      { name: 'weight', type: 'double', default: 'undefined' },
      { name: 'x', type: 'double', default: 'undefined' },
      { name: 'y', type: 'double', default: 'undefined' },
      { name: 'visitedCount', type: 'int', default: 'undefined' },
      { name: 'selectedCount', type: 'int', default: 'undefined' },
    ],
  }, {
    name: 'removeNode',
    description: 'Remove a node.',
    return: 'GraphTracer',
    arguments: [
      { name: 'id', type: 'Object' },
    ],
  }, {
    name: 'addEdge',
    description: 'Add an edge connecting from `source` to `target`.',
    return: 'GraphTracer',
    arguments: [
      { name: 'source', type: 'Object' },
      { name: 'target', type: 'Object' },
      { name: 'weight', type: 'double', default: 'null' },
      { name: 'visitedCount', type: 'int', default: '0' },
      { name: 'selectedCount', type: 'int', default: '0' },
    ],
  }, {
    name: 'updateEdge',
    description: 'Update an edge connecting from `source` to `target`.',
    return: 'GraphTracer',
    arguments: [
      { name: 'source', type: 'Object' },
      { name: 'target', type: 'Object' },
      { name: 'weight', type: 'double', default: 'undefined' },
      { name: 'visitedCount', type: 'int', default: 'undefined' },
      { name: 'selectedCount', type: 'int', default: 'undefined' },
    ],
  }, {
    name: 'removeEdge',
    description: 'Remove an edge connecting from `source` to `target`.',
    return: 'GraphTracer',
    arguments: [
      { name: 'source', type: 'Object' },
      { name: 'target', type: 'Object' },
    ],
  }, {
    name: 'layoutCircle',
    description: 'Arrange nodes on a circular layout.',
    return: 'GraphTracer',
    arguments: [],
  }, {
    name: 'layoutTree',
    description: 'Arrange nodes on a tree layout having `root` as its root node.',
    return: 'GraphTracer',
    arguments: [
      { name: 'root', type: 'Object', default: '0' },
      { name: 'sorted', type: 'boolean', default: 'false' },
    ],
  }, {
    name: 'layoutRandom',
    description: 'Arrange nodes randomly.',
    return: 'GraphTracer',
    arguments: [],
  }, {
    name: 'visit',
    description: 'Visit `target` from `source`.',
    return: 'GraphTracer',
    arguments: [
      { name: 'target', type: 'Object' },
      { name: 'source', type: 'Object', default: 'null' },
      { name: 'weight', type: 'double', default: 'undefined' },
    ],
  }, {
    name: 'leave',
    description: 'Return from `target` to `source`.',
    return: 'GraphTracer',
    arguments: [
      { name: 'target', type: 'Object' },
      { name: 'source', type: 'Object', default: 'null' },
      { name: 'weight', type: 'double', default: 'undefined' },
    ],
  }, {
    name: 'select',
    description: 'Select `target` from `source`.',
    return: 'GraphTracer',
    arguments: [
      { name: 'target', type: 'Object' },
      { name: 'source', type: 'Object', default: 'null' },
    ],
  }, {
    name: 'deselect',
    description: 'Stop selecting `target` from `source`.',
    return: 'GraphTracer',
    arguments: [
      { name: 'target', type: 'Object' },
      { name: 'source', type: 'Object', default: 'null' },
    ],
  }, {
    name: 'log',
    description: 'Log graph traversals.',
    return: 'GraphTracer',
    arguments: [
      { name: 'logTracer', type: 'LogTracer' },
    ],
  }],
};
