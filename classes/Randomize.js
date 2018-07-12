export default {
  name: 'LogTracer',
  description: 'Print logs.',
  methods: [{
    name: 'set',
    description: 'Set `messages` to print.',
    arguments: [
      { name: 'messages', type: 'Object[]', default: '[]' },
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
    name: 'print',
    description: 'Print `message`.',
    arguments: [
      { name: 'message', type: 'Object' },
    ],
  }],
};