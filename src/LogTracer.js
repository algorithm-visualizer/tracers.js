import { Tracer } from './';

class LogTracer extends Tracer {
  constructor(title) {
    super(title);

    this.register('LogTracer', 'set', 'reset', 'delay', 'print');
  }
}

export default LogTracer;