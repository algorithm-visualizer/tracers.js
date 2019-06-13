import test from 'ava';
import { Randomize } from '..';

const ITERATIONS = 100;

test('Randomize.Array1D', t => {
  for (let i = 0; i < ITERATIONS; i++) {
    const min = 3;
    const max = 10;
    const N = 5;
    const value = () => Randomize.Integer({ min, max });
    const sorted = true;
    const arr = Randomize.Array1D({ N, value, sorted });
    t.true(arr.length === N);
    t.true(arr.every(v => min <= v && v <= max));
    t.deepEqual(arr, [...arr].sort((a, b) => a - b));
  }
});

test('Randomize.Array2D', t => {
  for (let i = 0; i < ITERATIONS; i++) {
    const min = 3;
    const max = 10;
    const N = 5;
    const M = 4;
    const value = () => Randomize.Integer({ min, max });
    const sorted = true;
    const arrs = Randomize.Array2D({ N, M, value, sorted });
    t.true(arrs.length === N);
    t.true(arrs.every(arr => arr.length === M));
    t.true(arrs.every(arr => arr.every(v => min <= v && v <= max)));
    t.deepEqual(arrs, arrs.map(arr => [...arr].sort((a, b) => a - b)));
  }
});

test('Randomize.Double', t => {
  for (let i = 0; i < ITERATIONS; i++) {
    const min = 2.5;
    const max = 5.5;
    const v = Randomize.Double({ min, max });
    t.true(min <= v && v < max);
  }
});

test('Randomize.Graph', t => {
  for (let i = 0; i < ITERATIONS; i++) {
    const min = 3;
    const max = 10;
    const N = 5;
    const ratio = 1;
    const value = () => Randomize.Integer({ min, max });
    const directed = true;
    const weighted = true;
    const arrs = Randomize.Graph({ N, ratio, value, directed, weighted });
    t.true(arrs.length === N);
    t.true(arrs.every(arr => arr.length === N));
    t.true(arrs.every((arr, i) => arr.every((v, j) => {
      if (i === j) return v === 0;
      return min <= v && v <= max;
    })));
  }

  for (let i = 0; i < ITERATIONS; i++) {
    const N = 5;
    const ratio = .5;
    const directed = false;
    const weighted = false;
    const arrs = Randomize.Graph({ N, ratio, directed, weighted });
    t.true(arrs.length === N);
    t.true(arrs.every(arr => arr.length === N));
    t.true(arrs.every((arr, i) => arr.every((v, j) => {
      if (i === j) return v === 0;
      return v === arrs[j][i];
    })));
  }

  for (let i = 0; i < ITERATIONS; i++) {
    const N = 5;
    const ratio = 0;
    const arrs = Randomize.Graph({ N, ratio });
    t.true(arrs.length === N);
    t.true(arrs.every(arr => arr.length === N));
    t.true(arrs.every(arr => arr.every(v => v === 0)));
  }
});

test('Randomize.Integer', t => {
  for (let i = 0; i < ITERATIONS; i++) {
    const min = 3;
    const max = 10;
    const v = Randomize.Integer({ min, max });
    t.true(min <= v && v <= max);
  }
});

test('Randomize.String', t => {
  for (let i = 0; i < ITERATIONS; i++) {
    const length = 8;
    const letters = '0123456789ABCDEF';
    const str = Randomize.String({ length, letters });
    t.true(str.length === length);
    t.true(str.split('').every(c => letters.includes(c)));
  }
});
