import { Tracer } from './';

class Array1DTracer extends Tracer {
  constructor(title) {
    super(title);

    this.register('Array1DTracer', 'set', 'reset', 'delay', 'patch', 'depatch', 'select', 'deselect', 'chart');
  }
}

export default Array1DTracer;