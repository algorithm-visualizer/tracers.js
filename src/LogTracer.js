import { Tracer } from './';

class LogTracer extends Tracer {
  constructor(title) {
    super(title);

    this.register(
      'set',
      'print',
      'println',
      'printf',
    );
  }
}

export default LogTracer;
