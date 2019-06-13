import test from 'ava';
import Tester from './helpers/Tester';
import { LogTracer } from '..';

test('LogTracer', new Tester(execute => {
  let tracer;
  let key;

  execute([
      tracer = new LogTracer('Test Tracer'),
      key = tracer.key,
    ],
    { key, method: 'LogTracer', args: ['Test Tracer'] },
  );

  execute([
      tracer.destroy(),
    ],
    { key, method: 'destroy', args: [] },
  );

  execute([
      tracer.print('hello world'),
      tracer.print(123),
      tracer.print('\t\t\n'),
    ],
    { key, method: 'print', args: ['hello world'] },
    { key, method: 'print', args: [123] },
    { key, method: 'print', args: ['\t\t\n'] },
  );

  execute([
      tracer.printf('hello world'),
      tracer.printf('my name is %s.\n', 'jason'),
      tracer.printf('%d', 42),
    ],
    { key, method: 'printf', args: ['hello world'] },
    { key, method: 'printf', args: ['my name is %s.\n', 'jason'] },
    { key, method: 'printf', args: ['%d', 42] },
  );

  execute([
      tracer.println('hello world'),
      tracer.println(123),
      tracer.println('\t\t\n'),
    ],
    { key, method: 'println', args: ['hello world'] },
    { key, method: 'println', args: [123] },
    { key, method: 'println', args: ['\t\t\n'] },
  );

  execute([
      tracer.reset(),
    ],
    { key, method: 'reset', args: [] },
  );

  execute([
      tracer.set('hello world'),
      tracer.set(),
    ],
    { key, method: 'set', args: ['hello world'] },
    { key, method: 'set', args: [] },
  );
}).test);
