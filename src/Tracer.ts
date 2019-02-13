import { Commander } from './';

class Tracer extends Commander {
    constructor(title?: string) {
        super(arguments);
    }

    set(): this {
        return this.command('set', arguments);
    }

    reset(): this {
        return this.command('reset', arguments);
    }
}

export default Tracer;
