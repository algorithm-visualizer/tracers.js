import { Tracer } from './';

class GraphTracer extends Tracer {
  constructor(title) {
    super(title);

    this.register(
      'set',
      'directed',
      'weighted',
      'addNode',
      'updateNode',
      'removeNode',
      'addEdge',
      'updateEdge',
      'removeEdge',
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
