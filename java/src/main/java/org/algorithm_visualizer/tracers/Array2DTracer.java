package org.algorithm_visualizer.tracers;

public class Array2DTracer<T extends Array2DTracer<T>> extends Tracer {
    public static class Array2DOptions extends Options {
    }

    public Array2DTracer(String title, Array2DOptions options) {
        super(title, options);
    }

    public Array2DTracer(String title) {
        this(title, null);
    }

    public Array2DTracer(Array2DOptions options) {
        this(null, options);
    }

    public Array2DTracer() {
        this(null, null);
    }

    public T patch(Object... args) {
        Array2DTracer.addTrace(key, "patch", args);
        return (T) this;
    }

    public T depatch(Object... args) {
        Array2DTracer.addTrace(key, "depatch", args);
        return (T) this;
    }

    public T select(Object... args) {
        Array2DTracer.addTrace(key, "select", args);
        return (T) this;
    }

    public T selectRow(Object... args) {
        Array2DTracer.addTrace(key, "selectRow", args);
        return (T) this;
    }

    public T selectCol(Object... args) {
        Array2DTracer.addTrace(key, "selectCol", args);
        return (T) this;
    }

    public T deselect(Object... args) {
        Array2DTracer.addTrace(key, "deselect", args);
        return (T) this;
    }

    public T deselectRow(Object... args) {
        Array2DTracer.addTrace(key, "deselectRow", args);
        return (T) this;
    }

    public T deselectCol(Object... args) {
        Array2DTracer.addTrace(key, "deselectCol", args);
        return (T) this;
    }
}