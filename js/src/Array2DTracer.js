import { Tracer } from './';

class Array2DTracer extends Tracer {
  constructor(title) {
    super(title);

    this.register(
      'patch',
      'depatch',
      'select',
      'selectRow',
      'selectCol',
      'deselect',
      'deselectRow',
      'deselectCol',
    );
  }
}

export default Array2DTracer;