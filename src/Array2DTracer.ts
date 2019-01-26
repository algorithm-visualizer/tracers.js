import { Tracer } from './';

class Array2DTracer extends Tracer {
    set(array2d?: any[][]): this {
        return this.wtf('set', arguments);
    }

    patch(x: number, y: number, v?: any): this {
        return this.wtf('patch', arguments);
    }

    depatch(x: number, y: number): this {
        return this.wtf('depatch', arguments);
    }

    select(sx: number, sy: number, ex?: number, ey?: number): this {
        return this.wtf('select', arguments);
    }

    selectRow(x: number, sy: number, ey: number): this {
        return this.wtf('selectRow', arguments);
    }

    selectCol(y: number, sx: number, ex: number): this {
        return this.wtf('selectCol', arguments);
    }

    deselect(sx: number, sy: number, ex?: number, ey?: number): this {
        return this.wtf('deselect', arguments);
    }

    deselectRow(x: number, sy: number, ey: number): this {
        return this.wtf('deselectRow', arguments);
    }

    deselectCol(y: number, sx: number, ex: number): this {
        return this.wtf('deselectCol', arguments);
    }
}

export default Array2DTracer;
