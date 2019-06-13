import test from 'ava';
import Tester from './helpers/Tester';
import { Array2DTracer } from '..';

test('Array2DTracer', new Tester(execute => {
  let tracer;
  let key;

  execute([
      tracer = new Array2DTracer('Test Tracer'),
      key = tracer.key,
    ],
    { key, method: 'Array2DTracer', args: ['Test Tracer'] },
  );

  execute([
      tracer.depatch(3, 1),
    ],
    { key, method: 'depatch', args: [3, 1] },
  );

  execute([
      tracer.deselect(1, 2, 4, 5),
      tracer.deselect(1, 2),
    ],
    { key, method: 'deselect', args: [1, 2, 4, 5] },
    { key, method: 'deselect', args: [1, 2] },
  );

  execute([
      tracer.deselectCol(3, 1, 5),
    ],
    { key, method: 'deselectCol', args: [3, 1, 5] },
  );

  execute([
      tracer.deselectRow(4, 1, 3),
    ],
    { key, method: 'deselectRow', args: [4, 1, 3] },
  );

  execute([
      tracer.destroy(),
    ],
    { key, method: 'destroy', args: [] },
  );

  execute([
      tracer.patch(1, 3, 'value'),
      tracer.patch(2, 5, 999),
    ],
    { key, method: 'patch', args: [1, 3, 'value'] },
    { key, method: 'patch', args: [2, 5, 999] },
  );

  execute([
      tracer.reset(),
    ],
    { key, method: 'reset', args: [] },
  );

  execute([
      tracer.select(1, 3, 5, 7),
      tracer.select(2, 8),
    ],
    { key, method: 'select', args: [1, 3, 5, 7] },
    { key, method: 'select', args: [2, 8] },
  );

  execute([
      tracer.selectCol(3, 1, 5),
    ],
    { key, method: 'selectCol', args: [3, 1, 5] },
  );

  execute([
      tracer.selectRow(4, 1, 3),
    ],
    { key, method: 'selectRow', args: [4, 1, 3] },
  );

  execute([
      tracer.set([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
      ]),
    ],
    {
      key, method: 'set', args: [[
        [1, 2, 3, 4],
        [5, 6, 7, 8],
      ]],
    },
  );
}).test);
