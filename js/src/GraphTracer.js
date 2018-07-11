import { Tracer } from './';

class GraphTracer extends Tracer {
  constructor(title) {
    super(title);

    this.register(
      'directed',
      'weighted',
      'addNode',
      'addEdge',
      'layoutCircle',
      'layoutTree',
      'layoutRandom',
      'visit',
      'leave',
      'select',
      'deselect',
      'log',
    );
  }
}

export default GraphTracer;