import { Tracer } from './';

class LogTracer extends Tracer {
    set(log?: string) {
        this.command('set', arguments);
    }

    print(message: any) {
        this.command('print', arguments);
    }

    println(message: any) {
        this.command('println', arguments);
    }

    printf(format: string, ...args: any[]) {
        this.command('printf', arguments);
    }
}

export default LogTracer;
