import { Array2DTracer } from './';

class Array1DTracer extends Array2DTracer {
  constructor(title) {
    super(title);

    this.register(
      'set',
      'patch',
      'depatch',
      'select',
      'deselect',
      'chart',
    );
  }
}

export default Array1DTracer;
