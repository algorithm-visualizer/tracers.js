import { Array2DTracer, ChartTracer } from './';

class Array1DTracer extends Array2DTracer {
    set(array1d?: any[]): this {
        return this.addTrace('set', arguments);
    }

    patch(x: number, v?: any): this {
        return this.addTrace('patch', arguments);
    }

    depatch(x: number): this {
        return this.addTrace('depatch', arguments);
    }

    select(sx: number, ex?: number): this {
        return this.addTrace('select', arguments);
    }

    deselect(sx: number, ex?: number): this {
        return this.addTrace('deselect', arguments);
    }

    chart(chartTracer: ChartTracer): this {
        return this.addTrace('chart', arguments);
    }
}

export default Array1DTracer;
