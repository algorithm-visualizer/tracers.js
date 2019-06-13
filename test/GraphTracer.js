import test from 'ava';
import Tester from './helpers/Tester';
import { GraphTracer, LogTracer } from '..';

test('GraphTracer', new Tester(execute => {
  let tracer;
  let key;
  let logTracer;

  execute([
      tracer = new GraphTracer('Test Tracer'),
      key = tracer.key,
      logTracer = new LogTracer(),
    ],
    { key, method: 'GraphTracer', args: ['Test Tracer'] },
    { key: logTracer.key, method: 'LogTracer', args: [] },
  );

  execute([
      tracer.addEdge('x', 'y', 5),
      tracer.addEdge(1, 2, 4),
      tracer.addEdge(1, 2),
    ],
    { key, method: 'addEdge', args: ['x', 'y', 5] },
    { key, method: 'addEdge', args: [1, 2, 4] },
    { key, method: 'addEdge', args: [1, 2] },
  );

  execute([
      tracer.addNode('x', 3, -20.5, 30.5),
      tracer.addNode('x', 3),
      tracer.addNode(1),
    ],
    { key, method: 'addNode', args: ['x', 3, -20.5, 30.5] },
    { key, method: 'addNode', args: ['x', 3] },
    { key, method: 'addNode', args: [1] },
  );

  execute([
      tracer.deselect('y', 'x'),
      tracer.deselect('z'),
    ],
    { key, method: 'deselect', args: ['y', 'x'] },
    { key, method: 'deselect', args: ['z'] },
  );

  execute([
      tracer.destroy(),
    ],
    { key, method: 'destroy', args: [] },
  );

  execute([
      tracer.directed(true),
      tracer.directed(false),
      tracer.directed(),
    ],
    { key, method: 'directed', args: [true] },
    { key, method: 'directed', args: [false] },
    { key, method: 'directed', args: [] },
  );

  execute([
      tracer.layoutCircle(),
    ],
    { key, method: 'layoutCircle', args: [] },
  );

  execute([
      tracer.layoutRandom(),
    ],
    { key, method: 'layoutRandom', args: [] },
  );

  execute([
      tracer.layoutTree('x', true),
      tracer.layoutTree('x', false),
      tracer.layoutTree('y'),
      tracer.layoutTree(),
    ],
    { key, method: 'layoutTree', args: ['x', true] },
    { key, method: 'layoutTree', args: ['x', false] },
    { key, method: 'layoutTree', args: ['y'] },
    { key, method: 'layoutTree', args: [] },
  );

  execute([
      tracer.leave('y', 'x', 5),
      tracer.leave('y', 'z'),
      tracer.leave('k'),
    ],
    { key, method: 'leave', args: ['y', 'x', 5] },
    { key, method: 'leave', args: ['y', 'z'] },
    { key, method: 'leave', args: ['k'] },
  );

  execute([
      tracer.log(logTracer),
      tracer.log(null),
    ],
    { key, method: 'log', args: [logTracer.key] },
    { key, method: 'log', args: [null] },
  );

  execute([
      tracer.removeEdge('x', 'y'),
      tracer.removeEdge(1, 2),
    ],
    { key, method: 'removeEdge', args: ['x', 'y'] },
    { key, method: 'removeEdge', args: [1, 2] },
  );

  execute([
      tracer.removeNode('x'),
      tracer.removeNode(1),
    ],
    { key, method: 'removeNode', args: ['x'] },
    { key, method: 'removeNode', args: [1] },
  );

  execute([
      tracer.reset(),
    ],
    { key, method: 'reset', args: [] },
  );

  execute([
      tracer.select('x', 'y'),
      tracer.select(3),
    ],
    { key, method: 'select', args: ['x', 'y'] },
    { key, method: 'select', args: [3] },
  );

  execute([
      tracer.set([
        [1, 2, 3],
        [5, 6, 7],
        [4, 8, 9],
      ]),
    ],
    {
      key, method: 'set', args: [[
        [1, 2, 3],
        [5, 6, 7],
        [4, 8, 9],
      ]],
    },
  );

  execute([
      tracer.updateEdge('x', 'y', 5),
      tracer.updateEdge(1, 2, 4),
      tracer.updateEdge(1, 2),
    ],
    { key, method: 'updateEdge', args: ['x', 'y', 5] },
    { key, method: 'updateEdge', args: [1, 2, 4] },
    { key, method: 'updateEdge', args: [1, 2] },
  );

  execute([
      tracer.updateNode('x', 3, -20.5, 30.5),
      tracer.updateNode('x', 3),
      tracer.updateNode(1),
    ],
    { key, method: 'updateNode', args: ['x', 3, -20.5, 30.5] },
    { key, method: 'updateNode', args: ['x', 3] },
    { key, method: 'updateNode', args: [1] },
  );

  execute([
      tracer.visit('x', 'y', 5),
      tracer.visit(1, 2, 4),
      tracer.visit(1, 2),
    ],
    { key, method: 'visit', args: ['x', 'y', 5] },
    { key, method: 'visit', args: [1, 2, 4] },
    { key, method: 'visit', args: [1, 2] },
  );

  execute([
      tracer.weighted(true),
      tracer.weighted(false),
      tracer.weighted(),
    ],
    { key, method: 'weighted', args: [true] },
    { key, method: 'weighted', args: [false] },
    { key, method: 'weighted', args: [] },
  );
}).test);
