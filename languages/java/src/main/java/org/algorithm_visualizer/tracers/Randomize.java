package org.algorithm_visualizer.tracers;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Random;

public abstract class Randomize {
    private static abstract class Randomizer {
        protected static Random random = new Random();

        protected abstract Class getType();

        public abstract Object create();
    }

    public static class Integer extends Randomizer {
        @Override
        protected Class getType() {
            return java.lang.Integer.class;
        }

        private int _min;
        private int _max;

        public Integer(int min, int max) {
            _min = min;
            _max = max;
        }

        public Integer(int min) {
            this(min, 9);
        }

        public Integer() {
            this(1);
        }

        @Override
        public java.lang.Integer create() {
            return random.nextInt(_max - _min + 1) + _min;
        }
    }

    public static class Double extends Randomizer {
        @Override
        protected Class getType() {
            return java.lang.Double.class;
        }

        private double _min;
        private double _max;

        public Double(double min, double max) {
            _min = min;
            _max = max;
        }

        public Double(double min) {
            this(min, 1);
        }

        public Double() {
            this(0);
        }

        @Override
        public java.lang.Double create() {
            return random.nextDouble() * (_max - _min) + _min;
        }
    }

    public static class String extends Randomizer {
        @Override
        protected Class getType() {
            return java.lang.String.class;
        }

        private int _length;
        private java.lang.String _letters;

        public String(int length, java.lang.String letters) {
            _length = length;
            _letters = letters;
        }

        public String(int length) {
            this(length, "abcdefghijklmnopqrstuvwxyz");
        }

        public String() {
            this(16);
        }

        @Override
        public java.lang.String create() {
            StringBuilder text = new StringBuilder();
            Integer randomizer = new Integer(0, _letters.length() - 1);
            for (int i = 0; i < _length; i++) {
                text.append(_letters.charAt(randomizer.create()));
            }
            return text.toString();
        }
    }

    public static class Array2D extends Randomizer {
        @Override
        protected Class getType() {
            return null;
        }

        private int _N;
        private int _M;
        private Randomizer _randomizer;
        private boolean _sorted;

        public Array2D(int N, int M, Randomizer randomizer) {
            _N = N;
            _M = M;
            _randomizer = randomizer;
            _sorted = false;
        }

        public Array2D(int N, int M) {
            this(N, M, new Integer());
        }

        public Array2D(int N) {
            this(N, 10);
        }

        public Array2D() {
            this(10);
        }

        public Array2D sorted(boolean sorted) {
            _sorted = sorted;
            return this;
        }

        public Array2D sorted() {
            return sorted(true);
        }

        @Override
        public Object[][] create() {
            Object[][] D = (Object[][]) Array.newInstance(_randomizer.getType(), _N, _M);
            for (int i = 0; i < _N; i++) {
                for (int j = 0; j < _M; j++) {
                    D[i][j] = _randomizer.create();
                }
                if (_sorted) Arrays.sort(D[i]);
            }
            return D;
        }
    }

    public static class Array1D extends Randomizer {
        @Override
        protected Class getType() {
            return null;
        }

        private int _N;
        private Randomizer _randomizer;
        private boolean _sorted;

        public Array1D(int N, Randomizer randomizer) {
            _N = N;
            _randomizer = randomizer;
            _sorted = false;
        }

        public Array1D(int N) {
            this(N, new Integer());
        }

        public Array1D() {
            this(10);
        }

        public Array1D sorted(boolean sorted) {
            _sorted = sorted;
            return this;
        }

        public Array1D sorted() {
            return sorted(true);
        }

        @Override
        public Object[] create() {
            Object[] D = (Object[]) Array.newInstance(_randomizer.getType(), _N);
            for (int i = 0; i < _N; i++) {
                D[i] = _randomizer.create();
            }
            if (_sorted) Arrays.sort(D);
            return D;
        }
    }

    public static class Graph extends Randomizer {
        @Override
        protected Class getType() {
            return null;
        }

        private int _N;
        private double _ratio;
        private Randomizer _randomizer;
        private boolean _directed;
        private boolean _weighted;

        public Graph(int N, double ratio, Randomizer randomizer) {
            _N = N;
            _ratio = ratio;
            _randomizer = randomizer;
            _directed = true;
            _weighted = false;
        }

        public Graph(int N, double ratio) {
            this(N, ratio, new Integer());
        }

        public Graph(int N) {
            this(N, .3);
        }

        public Graph() {
            this(5);
        }

        public Graph directed(boolean directed) {
            _directed = directed;
            return this;
        }

        public Graph directed() {
            return directed(true);
        }

        public Graph weighted(boolean weighted) {
            _weighted = weighted;
            return this;
        }

        public Graph weighted() {
            return weighted(true);
        }

        @Override
        public Object[][] create() {
            Object[][] G = (Object[][]) Array.newInstance(_randomizer.getType(), _N, _N);
            for (int i = 0; i < _N; i++) {
                for (int j = 0; j < _N; j++) {
                    if (i == j) {
                        G[i][j] = 0;
                    } else if (_directed || i < j) {
                        G[i][j] = random.nextDouble() < _ratio ? _weighted ? _randomizer.create() : 1 : 0;
                    } else {
                        G[i][j] = G[j][i];
                    }
                }
            }
            return G;
        }
    }
}