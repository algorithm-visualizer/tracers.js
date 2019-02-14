import { Commander } from './';

class Layout extends Commander {
    static setRoot(child: Commander) {
        this.command(null, 'setRoot', arguments);
    }

    constructor(children: [Commander]) {
        super(arguments);
    }

    add(child: Commander, index?: Number) {
        this.command('add', arguments);
    }

    remove(child: Commander) {
        this.command('remove', arguments);
    }

    removeAll() {
        this.command('removeAll', arguments);
    }
}

export default Layout;
