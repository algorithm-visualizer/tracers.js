import { Tracer } from './';

class LogTracer extends Tracer {
  constructor(title) {
    super(title);

    this.register(
      'print',
    );
  }
}

export default LogTracer;