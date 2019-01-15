import { Tracer } from './';

class Array2DTracer extends Tracer {
  constructor(title) {
    super(title);

    this.register('Array2DTracer', 'set', 'reset', 'delay', 'patch', 'depatch', 'select', 'selectRow', 'selectCol', 'deselect', 'deselectRow', 'deselectCol');
  }
}

export default Array2DTracer;