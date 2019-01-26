const { LogTracer } = require('../dist/algorithm-visualizer');

const logTracer = new LogTracer();

logTracer.set('haahahahaa: ');

for (let i = 0; i < 3; i++)
  logTracer.print('tt ee ss tt').delay();
