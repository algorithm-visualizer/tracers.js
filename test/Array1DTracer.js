import test from 'ava';
import Tester from './helpers/Tester';
import { Array1DTracer, ChartTracer } from '..';

test('Array1DTracer', new Tester(execute => {
  let tracer;
  let key;
  let chartTracer;

  execute([
      tracer = new Array1DTracer('Test Tracer'),
      key = tracer.key,
      chartTracer = new ChartTracer(),
    ],
    { key, method: 'Array1DTracer', args: ['Test Tracer'] },
    { key: chartTracer.key, method: 'ChartTracer', args: [] },
  );

  execute([
      tracer.chart(chartTracer),
      tracer.chart(null),
    ],
    { key, method: 'chart', args: [chartTracer.key] },
    { key, method: 'chart', args: [null] },
  );

  execute([
      tracer.depatch(1),
    ],
    { key, method: 'depatch', args: [1] },
  );

  execute([
      tracer.deselect(2, 3),
    ],
    { key, method: 'deselect', args: [2, 3] },
  );

  execute([
      tracer.destroy(),
    ],
    { key, method: 'destroy', args: [] },
  );

  execute([
      tracer.patch(1, 'value'),
      tracer.patch(4, 999),
    ],
    { key, method: 'patch', args: [1, 'value'] },
    { key, method: 'patch', args: [4, 999] },
  );

  execute([
      tracer.reset(),
    ],
    { key, method: 'reset', args: [] },
  );

  execute([
      tracer.select(2, 3),
    ],
    { key, method: 'select', args: [2, 3] },
  );

  execute([
      tracer.set([1, 2, 3]),
      tracer.set(['a', 1, true]),
    ],
    { key, method: 'set', args: [[1, 2, 3]] },
    { key, method: 'set', args: [['a', 1, true]] },
  );
}).test);
