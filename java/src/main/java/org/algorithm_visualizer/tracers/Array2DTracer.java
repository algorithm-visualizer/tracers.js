package org.algorithm_visualizer.tracers;

public class Array2DTracer extends Tracer {
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

    public Array2DTracer reset(Object... args) {
        Tracer.addTrace(key, "reset", args);
        return this;
    }

    public Array2DTracer set(Object... args) {
        Tracer.addTrace(key, "set", args);
        return this;
    }

    public Array2DTracer delay(Object... args) {
        Tracer.addTrace(key, "delay", args);
        return this;
    }

    public Array2DTracer patch(Object... args) {
        Tracer.addTrace(key, "patch", args);
        return this;
    }

    public Array2DTracer depatch(Object... args) {
        Tracer.addTrace(key, "depatch", args);
        return this;
    }

    public Array2DTracer select(Object... args) {
        Tracer.addTrace(key, "select", args);
        return this;
    }

    public Array2DTracer selectRow(Object... args) {
        Tracer.addTrace(key, "selectRow", args);
        return this;
    }

    public Array2DTracer selectCol(Object... args) {
        Tracer.addTrace(key, "selectCol", args);
        return this;
    }

    public Array2DTracer deselect(Object... args) {
        Tracer.addTrace(key, "deselect", args);
        return this;
    }

    public Array2DTracer deselectRow(Object... args) {
        Tracer.addTrace(key, "deselectRow", args);
        return this;
    }

    public Array2DTracer deselectCol(Object... args) {
        Tracer.addTrace(key, "deselectCol", args);
        return this;
    }
}