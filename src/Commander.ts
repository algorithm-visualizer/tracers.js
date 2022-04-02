import { Randomize } from './';

const MAX_COMMANDS = 1000000;
const MAX_OBJECTS = 100;

/**
 * @ignore
 */
interface Command {
  key: string | null,
  method: string,
  args: Array<any>,
}

export default abstract class Commander {
  /**
   * @ignore
   */
  public static commands: Command[] = [];
  private static objectCount = 0;
  private readonly key: string;

  protected constructor(iArguments: IArguments) {
    Commander.objectCount++;
    const className = (<any>this).constructor.name;
    this.key = Commander.randomizeKey();
    this.command(className, iArguments);
  }

  /**
   * @ignore
   */
  public static init() {
    this.commands = [];
    this.objectCount = 0;
  }

  protected static command(key: string | null, method: string, iArguments: IArguments) {
    const args = Array.from(iArguments);
    this.commands.push({
      key,
      method,
      args: JSON.parse(JSON.stringify(args)),
    });
    if (this.commands.length > MAX_COMMANDS) throw new Error('Too Many Commands');
    if (this.objectCount > MAX_OBJECTS) throw new Error('Too Many Objects');
  }

  private static randomizeKey() {
    return Randomize.String({length: 8, letters: 'abcdefghijklmnopqrstuvwxyz0123456789'});
  }

  /**
   * Remove the tracer.
   */
  destroy() {
    Commander.objectCount--;
    this.command('destroy', arguments);
  }

  protected command(method: string, iArguments: IArguments) {
    Commander.command(this.key, method, iArguments);
  }

  protected toJSON() {
    return this.key;
  }
}

if (!process.env.ALGORITHM_VISUALIZER) {
  const axios = require('axios');
  const opn = require('opn');
  process.once('beforeExit', () => {
    axios.post('https://algorithm-visualizer.org/api/visualizations', {content: JSON.stringify(Commander.commands)})
      .then((response: any) => opn(response.data, {wait: false}))
      .catch(console.error);
  });
}
