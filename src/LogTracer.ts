import { Tracer } from './';

class LogTracer extends Tracer {
    set(log?: string): this {
        return this.wtf('set', arguments);
    }

    print(message: any): this {
        console.log(this);
        return this.wtf('print', arguments);
    }

    println(message: any): this {
        return this.wtf('println', arguments);
    }

    printf(format: string, ...args: any[]): this {
        return this.wtf('printf', arguments);
    }
}

export default LogTracer;
