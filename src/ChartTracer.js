import { Tracer } from './';

class ChartTracer extends Tracer {
  constructor(title) {
    super(title);

    this.register('ChartTracer', 'set', 'reset', 'delay', 'patch', 'depatch', 'select', 'deselect', 'chart');
  }
}

export default ChartTracer;