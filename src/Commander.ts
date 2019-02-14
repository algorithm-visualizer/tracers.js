import { Randomize } from './';

const MAX_COMMANDS = 1000000;
const MAX_OBJECTS = 100;

interface Command {
    key: string | null,
    method: string,
    args: Array<any>,
}

class Commander {
    private static keyRandomizer = new Randomize.String(8, 'abcdefghijklmnopqrstuvwxyz0123456789');
    private static objectCount = 0;
    public static commands: Command[] = [];

    static command(key: string | null, method: string, iArguments: IArguments) {
        const args = Array.from(iArguments);
        this.commands.push({
            key,
            method,
            args: JSON.parse(JSON.stringify(args)),
        });
        if (this.commands.length > MAX_COMMANDS) throw new Error('Too Many Commands');
        if (this.objectCount > MAX_OBJECTS) throw new Error('Too Many Objects');
    }

    private readonly key: string;

    constructor(iArguments: IArguments) {
        Commander.objectCount++;
        const className = (<any>this).constructor.name;
        this.key = Commander.keyRandomizer.create();
        this.command(className, iArguments);
    }

    destroy() {
        Commander.objectCount--;
        this.command('destroy', arguments);
    }

    command(method: string, iArguments: IArguments) {
        Commander.command(this.key, method, iArguments);
    }

    toJSON() {
        return this.key;
    }
}

const {ALGORITHM_VISUALIZER} = process.env;
if (!ALGORITHM_VISUALIZER) {
    const axios = require('axios');
    const opn = require('opn');
    process.on('beforeExit', () => {
        axios.post('https://algorithm-visualizer.org/api/visualizations', {content: JSON.stringify(Commander.commands)})
            .then((response: any) => opn(response.data, {wait: false}))
            .catch(console.error)
            .finally(() => process.exit());
    });
}

export default Commander;
