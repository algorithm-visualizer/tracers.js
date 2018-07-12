package org.algorithm_visualizer.tracers;

public class Array2DTracer extends Tracer {
    public Array2DTracer(String title) {
        super(title);
    }

    public Array2DTracer() {
        this(null);
    }

    public Array2DTracer reset(Object... args) {
        addTrace(key, "reset", args);
        return this;
    }

    public Array2DTracer set(Object... args) {
        addTrace(key, "set", args);
        return this;
    }

    public Array2DTracer delay(Object... args) {
        addTrace(key, "delay", args);
        return this;
    }

    public Array2DTracer patch(Object... args) {
        addTrace(key, "patch", args);
        return this;
    }

    public Array2DTracer depatch(Object... args) {
        addTrace(key, "depatch", args);
        return this;
    }

    public Array2DTracer select(Object... args) {
        addTrace(key, "select", args);
        return this;
    }

    public Array2DTracer selectRow(Object... args) {
        addTrace(key, "selectRow", args);
        return this;
    }

    public Array2DTracer selectCol(Object... args) {
        addTrace(key, "selectCol", args);
        return this;
    }

    public Array2DTracer deselect(Object... args) {
        addTrace(key, "deselect", args);
        return this;
    }

    public Array2DTracer deselectRow(Object... args) {
        addTrace(key, "deselectRow", args);
        return this;
    }

    public Array2DTracer deselectCol(Object... args) {
        addTrace(key, "deselectCol", args);
        return this;
    }
}