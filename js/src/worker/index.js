import { Tracer } from '../.';
import sandbox from './sandbox';

self.importScripts('https://unpkg.com/babel-standalone@6/babel.min.js');

onmessage = e => { // TODO: stop after the first delay() on the initial run
  const lines = e.data.split('\n').map((line, i) => line.replace(/(.+\. *delay *)(\( *\))/g, `$1(${i})`));
  const { code } = Babel.transform(lines.join('\n'), { presets: ['es2015'] });
  sandbox(code);
  postMessage(Tracer.traces);
};