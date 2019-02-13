import { Commander } from './';

class Layout extends Commander {
    constructor(children: [Commander]) {
        super(arguments);
    }

    add(child: Commander, index?: Number): this {
        return this.command('add', arguments);
    }

    remove(child: Commander): this {
        return this.command('remove', arguments);
    }

    removeAll(): this {
        return this.command('removeAll', arguments);
    }
}

export default Layout;
