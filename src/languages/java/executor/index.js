import Executor from '../../Exeutor';

const executor = new Executor({
  name: 'java',
  compileCommand: 'javac -cp /usr/bin/tracers/build/libs/tracers.jar Main.java',
  runCommand: 'java -cp /usr/bin/tracers/build/libs/tracers.jar:. Main',
});

export default executor;
