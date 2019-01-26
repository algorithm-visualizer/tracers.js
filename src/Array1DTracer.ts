import { Array2DTracer, ChartTracer } from './';

class Array1DTracer extends Array2DTracer {
    set(array1d?: any[]): this {
        return this.wtf('set', arguments);
    }

    patch(x: number, v?: any): this {
        return this.wtf('patch', arguments);
    }

    depatch(x: number): this {
        return this.wtf('depatch', arguments);
    }

    select(sx: number, ex?: number): this {
        return this.wtf('select', arguments);
    }

    deselect(sx: number, ex?: number): this {
        return this.wtf('deselect', arguments);
    }

    chart(chartTracer: ChartTracer): this {
        return this.wtf('chart', arguments);
    }
}

export default Array1DTracer;
