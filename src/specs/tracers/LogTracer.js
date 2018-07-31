export default {
  name: 'LogTracer',
  description: 'Print logs.',
  methods: [{
    name: 'LogTracer',
    description: 'Create a LogTracer object.',
    return: 'new',
    arguments: [
      { name: 'title', type: 'String', default: '\"LogTracer\"' },
    ],
  }, {
    name: 'set',
    description: 'Set `messages` to print.',
    return: 'LogTracer',
    arguments: [
      { name: 'messages', type: 'Object[]', default: '[]' },
    ],
  }, {
    name: 'reset',
    description: 'Reset data.',
    return: 'LogTracer',
    arguments: [],
  }, {
    name: 'delay',
    description: 'Pause to show changes in all tracers.',
    return: 'LogTracer',
    arguments: [],
  }, {
    name: 'print', // TODO: separate into println and print methods
    description: 'Print `message`.',
    return: 'LogTracer',
    arguments: [
      { name: 'message', type: 'Object' },
    ],
  }],
};