const MAX_TRACES = 1000000;
const MAX_TRACERS = 100;

interface Trace {
    tracerKey: string,
    method: string,
    args: Array<any>,
}

class Tracer {
    private static tracerCount: number = 0;
    public static traces: Trace[] = [];
    private readonly key: string;

    static addTracer(className: string, title: string): string {
        const key = `${this.tracerCount++}-${className}-${title}`;
        const method = 'construct';
        const args = [className, title];
        this.addTrace(key, method, args);
        return key;
    }

    static addTrace(tracerKey: string, method: string, args: any[]): void {
        this.traces.push({
            tracerKey,
            method,
            args: JSON.parse(JSON.stringify(args)),
        });
        if (this.traces.length > MAX_TRACES) throw new Error('Traces Limit Exceeded');
        if (this.tracerCount > MAX_TRACERS) throw new Error('Tracers Limit Exceeded');
    }

    constructor(title?: string) {
        const className: string = (<any>this).constructor.name;
        if (title === undefined) title = className;
        this.key = Tracer.addTracer(className, title);
    }

    addTrace(method: string, iArguments: IArguments): this {
        const args = Array.from(iArguments).map(arg => arg instanceof Tracer ? arg.key : arg);
        Tracer.addTrace(this.key, method, args);
        return this;
    }

    set(): this {
        return this.addTrace('set', arguments);
    }

    reset(): this {
        return this.addTrace('reset', arguments);
    }

    delay(): this {
        return this.addTrace('delay', arguments);
    }
}

const {ALGORITHM_VISUALIZER} = process.env;
if (!ALGORITHM_VISUALIZER) {
    const axios = require('axios');
    const opn = require('opn');
    process.on('beforeExit', () => {
        axios.post('https://algorithm-visualizer.org/api/visualizations', {content: JSON.stringify(Tracer.traces)})
            .then((response: any) => opn(response.data, {wait: false}))
            .catch(console.error)
            .finally(() => process.exit());
    });
}

export default Tracer;
