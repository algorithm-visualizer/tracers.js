import { Array2DTracer } from './';

class Array1DTracer extends Array2DTracer {
  constructor(title, options) {
    super(title, options);

    this.unregister(
      'selectRow',
      'selectCol',
      'deselectRow',
      'deselectCol',
    );

    this.register(
      'chart'
    );
  }
}

export default Array1DTracer;