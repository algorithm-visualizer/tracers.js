import { maxTracers, maxTraces } from '../../limits.json';

class Tracer {
  static serialize(object) {
    return JSON.parse(JSON.stringify(object));
  }

  static addTracer(className, title, options) {
    const key = `${this.tracerCount++}-${className}-${title}`;
    const method = 'construct';
    const args = [className, title, options];
    this.addTrace(key, method, args);
    return key;
  }

  static addTrace(tracerKey, method, args) {
    const trace = {
      tracerKey,
      method,
      args: this.serialize(args.map(arg => arg instanceof Tracer ? arg.key : arg)),
    };
    this.traces.push(trace);
    if (this.traces.length > maxTraces) throw new Error('Traces Limit Exceeded');
    if (this.tracerCount > maxTracers) throw new Error('Tracers Limit Exceeded');
  }

  constructor(title = this.constructor.name, options = {}) {
    if (typeof title === 'object') {
      options = title;
      title = this.constructor.name;
    }
    this.key = Tracer.addTracer(this.constructor.name, title, options);
    this.register(
      'reset',
      'set',
      'wait',
    );
  }

  register(...functions) {
    for (const func of functions) {
      this[func] = (...args) => {
        Tracer.addTrace(this.key, func, args);
        return this;
      };
    }
  }

  unregister(...functions) {
    for (const func of functions) {
      delete this[func];
    }
  }
}

Tracer.tracerCount = 0;
Tracer.traces = [];

export default Tracer;
