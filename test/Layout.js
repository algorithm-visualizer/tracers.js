import test from 'ava';
import Tester from './helpers/Tester';
import { ChartTracer, Layout } from '..';

test('Layout', new Tester(execute => {
  let chartTracer;

  execute([
      chartTracer = new ChartTracer(),
      Layout.setRoot(chartTracer),
      Layout.setRoot(null),
    ],
    { key: chartTracer.key, method: 'ChartTracer', args: [] },
    { key: null, method: 'setRoot', args: [chartTracer.key] },
    { key: null, method: 'setRoot', args: [null] },
  );
}).test);
