import { Tracer } from './';

class LogTracer extends Tracer {
  constructor(title, options) {
    super(title, options);

    this.register(
      'print',
    );
  }
}

export default LogTracer;