import { Tracer } from './modules';

class LogTracer extends Tracer {
  constructor(title, options) {
    super(title, options);

    this.register(
      'print',
    );
  }
}

export default LogTracer;