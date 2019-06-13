import { Tracer } from './';

export default class Array2DTracer extends Tracer {
  /**
   * Set a two-dimensional array to visualize.
   *
   * @param array2d
   */
  set(array2d?: any[][]) {
    this.command('set', arguments);
  }

  /**
   * Notify that a value has been changed.
   *
   * @param x The row index of the array.
   * @param y The column index of the array.
   * @param v The new value to change to.
   */
  patch(x: number, y: number, v?: any) {
    this.command('patch', arguments);
  }

  /**
   * Stop notifying that a value has been changed.
   *
   * @param x The row index of the array.
   * @param y The column index of the array.
   */
  depatch(x: number, y: number) {
    this.command('depatch', arguments);
  }

  /**
   * Select indices of the array.
   *
   * @param sx The row index to select inclusively from.
   * @param sy The column index to select inclusively from.
   * @param ex The row index to select inclusively to. If omitted, it will only select index `sx`.
   * @param ey The column index to select inclusively to. If omitted, it will only select index `sy`.
   */
  select(sx: number, sy: number, ex?: number, ey?: number) {
    this.command('select', arguments);
  }

  /**
   * Select indices of a row of the array.
   *
   * @param x The row index to select.
   * @param sy The column index to select inclusively from.
   * @param ey The column index to select inclusively to.
   */
  selectRow(x: number, sy: number, ey: number) {
    this.command('selectRow', arguments);
  }

  /**
   * Select indices of a column of the array.
   *
   * @param y The column index to select.
   * @param sx The row index to select inclusively from.
   * @param ex The row index to select inclusively to.
   */
  selectCol(y: number, sx: number, ex: number) {
    this.command('selectCol', arguments);
  }

  /**
   * Stop selecting indices of the array.
   *
   * @param sx The row index to stop selecting inclusively from.
   * @param sy The column index to stop selecting inclusively from.
   * @param ex The row index to stop selecting inclusively to. If omitted, it will only stop selecting index `sx`.
   * @param ey The column index to stop selecting inclusively to. If omitted, it will only stop selecting index `sy`.
   */
  deselect(sx: number, sy: number, ex?: number, ey?: number) {
    this.command('deselect', arguments);
  }

  /**
   * Stop selecting indices of a row of the array.
   *
   * @param x The row index to stop selecting.
   * @param sy The column index to stop selecting inclusively from.
   * @param ey The column index to stop selecting inclusively to.
   */
  deselectRow(x: number, sy: number, ey: number) {
    this.command('deselectRow', arguments);
  }

  /**
   * Stop selecting indices of a column of the array.
   *
   * @param y The column index to stop selecting.
   * @param sx The row index to stop selecting inclusively from.
   * @param ex The row index to stop selecting inclusively to.
   */
  deselectCol(y: number, sx: number, ex: number) {
    this.command('deselectCol', arguments);
  }
}
