import { Array2DTracer, ChartTracer } from './';

class Array1DTracer extends Array2DTracer {
    set(array1d?: any[]): this {
        return this.command('set', arguments);
    }

    patch(x: number, v?: any): this {
        return this.command('patch', arguments);
    }

    depatch(x: number): this {
        return this.command('depatch', arguments);
    }

    select(sx: number, ex?: number): this {
        return this.command('select', arguments);
    }

    deselect(sx: number, ex?: number): this {
        return this.command('deselect', arguments);
    }

    chart(chartTracer: ChartTracer): this {
        return this.command('chart', arguments);
    }
}

export default Array1DTracer;
