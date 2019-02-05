import { Tracer } from './';

class Array2DTracer extends Tracer {
    set(array2d?: any[][]): this {
        return this.addTrace('set', arguments);
    }

    patch(x: number, y: number, v?: any): this {
        return this.addTrace('patch', arguments);
    }

    depatch(x: number, y: number): this {
        return this.addTrace('depatch', arguments);
    }

    select(sx: number, sy: number, ex?: number, ey?: number): this {
        return this.addTrace('select', arguments);
    }

    selectRow(x: number, sy: number, ey: number): this {
        return this.addTrace('selectRow', arguments);
    }

    selectCol(y: number, sx: number, ex: number): this {
        return this.addTrace('selectCol', arguments);
    }

    deselect(sx: number, sy: number, ex?: number, ey?: number): this {
        return this.addTrace('deselect', arguments);
    }

    deselectRow(x: number, sy: number, ey: number): this {
        return this.addTrace('deselectRow', arguments);
    }

    deselectCol(y: number, sx: number, ex: number): this {
        return this.addTrace('deselectCol', arguments);
    }
}

export default Array2DTracer;
