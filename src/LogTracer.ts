import { Tracer } from './';

class LogTracer extends Tracer {
    set(log?: string): this {
        return this.addTrace('set', arguments);
    }

    print(message: any): this {
        return this.addTrace('print', arguments);
    }

    println(message: any): this {
        return this.addTrace('println', arguments);
    }

    printf(format: string, ...args: any[]): this {
        return this.addTrace('printf', arguments);
    }
}

export default LogTracer;
