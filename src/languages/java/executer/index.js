import Executer from '../../Exeuter';

const executer = new Executer({
  name: 'java',
  compileCommand: 'javac -cp /usr/bin/tracers/build/libs/tracers.jar Main.java',
  runCommand: 'java -cp /usr/bin/tracers/build/libs/tracers.jar:. Main',
});

export default executer;