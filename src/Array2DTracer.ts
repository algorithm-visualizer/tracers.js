import { Tracer } from './';

class Array2DTracer extends Tracer {
    set(array2d?: any[][]): this {
        return this.command('set', arguments);
    }

    patch(x: number, y: number, v?: any): this {
        return this.command('patch', arguments);
    }

    depatch(x: number, y: number): this {
        return this.command('depatch', arguments);
    }

    select(sx: number, sy: number, ex?: number, ey?: number): this {
        return this.command('select', arguments);
    }

    selectRow(x: number, sy: number, ey: number): this {
        return this.command('selectRow', arguments);
    }

    selectCol(y: number, sx: number, ex: number): this {
        return this.command('selectCol', arguments);
    }

    deselect(sx: number, sy: number, ex?: number, ey?: number): this {
        return this.command('deselect', arguments);
    }

    deselectRow(x: number, sy: number, ey: number): this {
        return this.command('deselectRow', arguments);
    }

    deselectCol(y: number, sx: number, ex: number): this {
        return this.command('deselectCol', arguments);
    }
}

export default Array2DTracer;
