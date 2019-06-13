import { Commander } from '../..';

export default class Tester {
  constructor(implement) {
    Commander.init();

    this.implement = implement;

    this.test = this.test.bind(this);
    this.execute = this.execute.bind(this);
  }

  test(t) {
    this.commands = [];
    this.implement(this.execute);
    t.deepEqual(Commander.commands, this.commands);
  };

  execute(_, ...expectedCommands) {
    this.commands.push(...expectedCommands);
  };
}
