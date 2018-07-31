import Executer from '../../Exeuter';

const executer = new Executer({
  name: 'cpp',
  compileCommand: 'g++ Main.cpp -o Main -O2 -std=c++11 -L/usr/bin/tracers/build/src -l:tracers.a -I/usr/bin/tracers/include',
  runCommand: './Main',
});

export default executer;