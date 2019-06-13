import test from 'ava';
import Tester from './helpers/Tester';
import { Tracer } from '..';

test('Tracer', new Tester(execute => {
  execute([
      Tracer.delay(15),
      Tracer.delay(),
    ],
    { key: null, method: 'delay', args: [15] },
    { key: null, method: 'delay', args: [] },
  );
}).test);
