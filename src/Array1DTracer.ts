import { Array2DTracer, ChartTracer } from './';

class Array1DTracer extends Array2DTracer {
    set(array1d?: any[]) {
        this.command('set', arguments);
    }

    patch(x: number, v?: any) {
        this.command('patch', arguments);
    }

    depatch(x: number) {
        this.command('depatch', arguments);
    }

    select(sx: number, ex?: number) {
        this.command('select', arguments);
    }

    deselect(sx: number, ex?: number) {
        this.command('deselect', arguments);
    }

    chart(chartTracer: ChartTracer) {
        this.command('chart', arguments);
    }
}

export default Array1DTracer;
