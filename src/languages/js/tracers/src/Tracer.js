import { maxTraces, maxTracers } from '../../../../common/config';

class Tracer {
  static addTracer(className, title) {
    const key = `${this.tracerCount++}-${className}-${title}`;
    const method = 'construct';
    const args = [className, title];
    this.addTrace(key, method, args);
    return key;
  }

  static addTrace(tracerKey, method, args) {
    const trace = {
      tracerKey,
      method,
      args: JSON.parse(JSON.stringify(args)),
    };
    this.traces.push(trace);
    if (this.traces.length > maxTraces) throw new Error('Traces Limit Exceeded');
    if (this.tracerCount > maxTracers) throw new Error('Tracers Limit Exceeded');
  }

  constructor(title = this.constructor.name) {
    this.key = Tracer.addTracer(this.constructor.name, title);
    this.register(
      'reset',
      'set',
      'delay',
    );
  }

  register(...functions) {
    for (const func of functions) {
      this[func] = (...args) => {
        Tracer.addTrace(this.key, func, args.map(arg => arg instanceof Tracer ? arg.key : arg));
        return this;
      };
    }
  }
}

Tracer.tracerCount = 0;
Tracer.traces = [];

export default Tracer;
