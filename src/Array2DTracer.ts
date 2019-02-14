import { Tracer } from './';

class Array2DTracer extends Tracer {
    set(array2d?: any[][]) {
        this.command('set', arguments);
    }

    patch(x: number, y: number, v?: any) {
        this.command('patch', arguments);
    }

    depatch(x: number, y: number) {
        this.command('depatch', arguments);
    }

    select(sx: number, sy: number, ex?: number, ey?: number) {
        this.command('select', arguments);
    }

    selectRow(x: number, sy: number, ey: number) {
        this.command('selectRow', arguments);
    }

    selectCol(y: number, sx: number, ex: number) {
        this.command('selectCol', arguments);
    }

    deselect(sx: number, sy: number, ex?: number, ey?: number) {
        this.command('deselect', arguments);
    }

    deselectRow(x: number, sy: number, ey: number) {
        this.command('deselectRow', arguments);
    }

    deselectCol(y: number, sx: number, ex: number) {
        this.command('deselectCol', arguments);
    }
}

export default Array2DTracer;
