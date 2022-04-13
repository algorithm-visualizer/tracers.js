namespace Randomize {
  type IntegerOptions = {
    /**
     * The inclusive lower bound.
     */
    min?: number;

    /**
     * The inclusive upper bound.
     */
    max?: number;
  }

  export function Integer(options?: IntegerOptions) {
    const {
      min = 1,
      max = 9,
    } = options || {};

    return Math.random() * (max - min + 1) + min | 0;
  }

  type DoubleOptions = {
    /**
     * The inclusive lower bound.
     */
    min?: number;

    /**
     * The exclusive upper bound.
     */
    max?: number;
  }

  export function Double(options?: DoubleOptions) {
    const {
      min = 0,
      max = 1,
    } = options || {};

    return Math.random() * (max - min) + min;
  }

  type StringOptions = {
    length?: number;

    /**
     * The character set to generate a random string from.
     */
    letters?: string;
  }

  export function String(options?: StringOptions) {
    const {
      length = 16,
      letters = 'abcdefghijklmnopqrstuvwxyz',
    } = options || {};

    let text = '';
    for (let i = 0; i < length; i++) {
      text += letters[Integer({min: 0, max: letters.length - 1})];
    }
    return text;
  }

  type Array2DOptions = {
    /**
     * The number of rows.
     */
    N?: number;

    /**
     * The number of columns.
     */
    M?: number;

    /**
     * The function to generate the value of each element.
     *
     * @param i The row index of an element to generate the value of.
     * @param j The column index of an element to generate the value of.
     */
    value?: (i: number, j: number) => any;

    /**
     * Whether to sort each row.
     */
    sorted?: boolean;
  }

  export function Array2D(options?: Array2DOptions): any[][] {
    const {
      N = 10,
      M = 10,
      value = () => Integer(),
      sorted = false,
    } = options || {};

    const D: any[][] = [];
    for (let i = 0; i < N; i++) {
      D.push([]);
      for (let j = 0; j < M; j++) {
        D[i].push(value(i, j));
      }
      if (sorted) D[i].sort((a, b) => a - b);
    }
    return D;
  }

  type Array1DOptions = {
    /**
     * The number of elements.
     */
    N?: number;

    /**
     * The function to generate the value of each element.
     *
     * @param i The index of an element to generate the value of.
     */
    value?: (i: number) => any;

    /**
     * Whether to sort the array.
     */
    sorted?: boolean;
  }

  export function Array1D(options?: Array1DOptions) {
    const {
      N = 10,
      value = () => Integer(),
      sorted = false,
    } = options || {};

    return Array2D({
      N: 1,
      M: N,
      value: value && ((i, j) => value(j)),
      sorted,
    })[0];
  }

  type GraphOptions = {
    /**
     * The number of nodes.
     */
    N?: number;

    /**
     * The probability that an edge between any two nodes is generated.
     */
    ratio?: number;

    /**
     * The function to generate the weight of each edge.
     *
     * @param source The id of the node where the edge starts.
     * @param target The id of the node where the edge ends.
     */
    value?: (source: number, target: number) => any;

    /**
     * Whether to make the graph directed.
     */
    directed?: boolean;

    /**
     * Whether to make the graph weighted.
     */
    weighted?: boolean;
  }

  export function Graph(options?: GraphOptions) {
    const {
      N = 5,
      ratio = .3,
      value = () => Integer(),
      directed = true,
      weighted = false,
    } = options || {};

    const G: any[][] = new Array(N);
    for (let i = 0; i < N; i++) {
      G[i] = new Array(N);
    }
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (i === j) {
          G[i][j] = 0;
        } else if (directed || i < j) {
          G[i][j] = Math.random() < ratio ? weighted ? value(i, j) : 1 : 0;
        } else {
          G[i][j] = G[j][i];
        }
      }
    }
    return G;
  }
}

export default Randomize;
