import { Tracer } from './';

export default class LogTracer extends Tracer {
  /**
   * Set initial log to show.
   *
   * @param log
   */
  set(log?: string) {
    this.command('set', arguments);
  }

  /**
   * Print log.
   *
   * @param message
   */
  print(message: any) {
    this.command('print', arguments);
  }

  /**
   * Print log and put a line break.
   *
   * @param message
   */
  println(message: any) {
    this.command('println', arguments);
  }

  /**
   * Print formatted log.
   *
   * @param format Refer to [sprintf-js](https://github.com/alexei/sprintf.js#format-specification).
   * @param args
   */
  printf(format: string, ...args: any[]) {
    this.command('printf', arguments);
  }
}
