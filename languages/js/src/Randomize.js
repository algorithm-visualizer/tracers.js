class Randomizer {
  create() {
    return null;
  }
}

class Integer extends Randomizer {
  constructor(min = 1, max = 9) {
    super();
    this._min = min;
    this._max = max;
  }

  create() {
    return Math.random() * (this._max - this._min + 1) + this._min | 0;
  }
}

class Double extends Randomizer {
  constructor(min = 0, max = 1) {
    super();
    this._min = min;
    this._max = max;
  }

  create() {
    return Math.random() * (this._max - this._min) + this._min;
  }
}

class String extends Randomizer {
  constructor(length = 16, letters = 'abcdefghijklmnopqrstuvwxyz') {
    super();
    this._length = length;
    this._letters = letters;
  }

  create() {
    let text = '';
    const randomizer = new Integer(0, this._letters.length - 1);
    for (let i = 0; i < this._length; i++) {
      text += this._letters[randomizer.create()];
    }
    return text;
  }
}

class Array2D extends Randomizer {
  constructor(N = 10, M = 10, randomizer = new Integer()) {
    super();
    this._N = N;
    this._M = M;
    this._randomizer = randomizer;
    this._sorted = false;
  }

  sorted(sorted = true) {
    this._sorted = sorted;
    return this;
  }

  create() {
    const D = [];
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
  constructor(N, randomizer) {
    super(1, N, randomizer);
  }

  create() {
    return super.create()[0];
  }
}

class Graph extends Randomizer {
  constructor(N = 5, ratio = .3, randomizer = new Integer()) {
    super();
    this._N = N;
    this._ratio = ratio;
    this._randomizer = randomizer;
    this._directed = true;
    this._weighted = false;
  }

  directed(directed = true) {
    this._directed = directed;
    return this;
  }

  weighted(weighted = true) {
    this._weighted = weighted;
    return this;
  }

  create() {
    const G = new Array(this._N);
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
  String,
  Array1D,
  Array2D,
  Graph,
};