import * as Tracers from './tracers';
import { Tracer } from './tracers';
import { serialize } from '/common/util';

self.importScripts('https://unpkg.com/babel-standalone@6/babel.min.js');

const modules = {
  'algorithm-visualizer': Tracers,
};

const evalInSandbox = code => {
  const require = moduleName => modules[moduleName]; // fake require
  eval(code);
};

onmessage = e => {
  const lines = e.data.split('\n').map((line, i) => line.replace(/(.+\. *wait *)(\( *\))/g, `$1(${i})`));
  const { code } = Babel.transform(lines.join('\n'), { presets: ['es2015'] });
  const seed = new Seed();
  Tracer.seed = seed;
  evalInSandbox(code);
  postMessage(seed.traces);
};

class Seed {
  constructor() {
    this.tracerCount = 0;
    this.traces = [];
  }

  addTracer(className, title, options) {
    const key = `${this.tracerCount++}-${className}-${title}`;
    const method = 'construct';
    const args = [className, title, options];
    this.addTrace(key, method, args);
    return key;
  }

  addTrace(tracerKey, method, args) {
    const trace = {
      tracerKey,
      method,
      args: serialize(args.map(arg => arg instanceof Tracer ? arg.key : arg)),
    };
    this.traces.push(trace);
  }
}