import { Commander } from './';

class Tracer extends Commander {
    static delay(lineNumber?: Number) {
        this.command(null, 'delay', arguments);
    }

    constructor(title?: string) {
        super(arguments);
    }

    set() {
        this.command('set', arguments);
    }

    reset() {
        this.command('reset', arguments);
    }
}

export default Tracer;
