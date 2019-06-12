class Randomizer {
    create(): any {
        return null;
    }
}

class Integer extends Randomizer {
    private readonly _min: number;
    private readonly _max: number;

    constructor(min: number = 1, max: number = 9) {
        super();
        this._min = min;
        this._max = max;
    }

    create(): number {
        return Math.random() * (this._max - this._min + 1) + this._min | 0;
    }
}

class Double extends Randomizer {
    private readonly _min: number;
    private readonly _max: number;

    constructor(min: number = 0, max: number = 1) {
        super();
        this._min = min;
        this._max = max;
    }

    create(): number {
        return Math.random() * (this._max - this._min) + this._min;
    }
}

class String extends Randomizer {
    private readonly _length: number;
    private readonly _letters: string;

    constructor(length: number = 16, letters: string = 'abcdefghijklmnopqrstuvwxyz') {
        super();
        this._length = length;
        this._letters = letters;
    }

    create(): string {
        let text = '';
        const randomizer = new Integer(0, this._letters.length - 1);
        for (let i = 0; i < this._length; i++) {
            text += this._letters[randomizer.create()];
        }
        return text;
    }
}

class Array2D extends Randomizer {
    private readonly _N: number;
    private readonly _M: number;
    private readonly _randomizer: Randomizer;
    private _sorted: boolean;

    constructor(N: number = 10, M: number = 10, randomizer: Randomizer = new Integer()) {
        super();
        this._N = N;
        this._M = M;
        this._randomizer = randomizer;
        this._sorted = false;
    }

    sorted(sorted = true): this {
        this._sorted = sorted;
        return this;
    }

    create(): any[][] {
        const D: any[][] = [];
        for (let i = 0; i < this._N; i++) {
            D.push([]);
            for (let j = 0; j < this._M; j++) {
                D[i].push(this._randomizer.create());
            }
            if (this._sorted) D[i].sort((a, b) => a - b);
        }
        return D;
    }
}

class Array1D extends Array2D {
    constructor(N?: number, randomizer?: Randomizer) {
        super(1, N, randomizer);
    }

    create(): any[] {
        return super.create()[0];
    }
}

class Graph extends Randomizer {
    private readonly _N: number;
    private readonly _ratio: number;
    private _randomizer: Randomizer;
    private _directed: boolean;
    private _weighted: boolean;

    constructor(N: number = 5, ratio: number = .3, randomizer: Randomizer = new Integer()) {
        super();
        this._N = N;
        this._ratio = ratio;
        this._randomizer = randomizer;
        this._directed = true;
        this._weighted = false;
    }

    directed(directed: boolean = true): this {
        this._directed = directed;
        return this;
    }

    weighted(weighted: boolean = true): this {
        this._weighted = weighted;
        return this;
    }

    create(): any[][] {
        const G: any[][] = new Array(this._N);
        for (let i = 0; i < this._N; i++) {
            G[i] = new Array(this._N);
        }
        for (let i = 0; i < this._N; i++) {
            for (let j = 0; j < this._N; j++) {
                if (i === j) {
                    G[i][j] = 0;
                } else if (this._directed || i < j) {
                    G[i][j] = Math.random() < this._ratio ? this._weighted ? this._randomizer.create() : 1 : 0;
                } else {
                    G[i][j] = G[j][i];
                }
            }
        }
        return G;
    }
}

export default {
    Integer,
    Double,
    String,
    Array1D,
    Array2D,
    Graph,
};
