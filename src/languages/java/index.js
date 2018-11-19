import builder from './builder';
import executor from './executor';

export default {
  build: builder.build,
  compile: executor.compile,
  run: executor.run,
};
