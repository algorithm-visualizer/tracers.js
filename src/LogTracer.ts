import { Tracer } from './';

class LogTracer extends Tracer {
    set(log?: string): this {
        return this.command('set', arguments);
    }

    print(message: any): this {
        return this.command('print', arguments);
    }

    println(message: any): this {
        return this.command('println', arguments);
    }

    printf(format: string, ...args: any[]): this {
        return this.command('printf', arguments);
    }
}

export default LogTracer;
