import builder from './builder';
import executer from './executer';

export default {
  build: builder.build,
  compile: executer.compile,
  run: executer.run,
};