import { Commander } from './';

export default abstract class Tracer extends Commander {
  /**
   * Create a tracer.
   *
   * @param title
   */
  constructor(title?: string) {
    super(arguments);
  }

  /**
   * Pause to show changes in all tracers.
   *
   * @param lineNumber The line number to indicate when paused. If omitted, the line calling this method will be indicated.
   */
  static delay(lineNumber?: Number) {
    this.command(null, 'delay', arguments);
  }

  /**
   * Reset the tracer.
   */
  reset() {
    this.command('reset', arguments);
  }
}
