package org.algorithm_visualizer.tracers;

public class Array1DTracer extends Tracer {
    public static class Array1DOptions extends Options {
    }

    public Array1DTracer(String title, Array1DOptions options) {
        super(title, options);
    }

    public Array1DTracer(String title) {
        this(title, null);
    }

    public Array1DTracer(Array1DOptions options) {
        this(null, options);
    }

    public Array1DTracer() {
        this(null, null);
    }

    public Array1DTracer reset(Object... args) {
        Tracer.addTrace(key, "reset", args);
        return this;
    }

    public Array1DTracer set(Object... args) {
        Tracer.addTrace(key, "set", args);
        return this;
    }

    public Array1DTracer delay(Object... args) {
        Tracer.addTrace(key, "delay", args);
        return this;
    }

    public Array1DTracer patch(Object... args) {
        Tracer.addTrace(key, "patch", args);
        return this;
    }

    public Array1DTracer depatch(Object... args) {
        Tracer.addTrace(key, "depatch", args);
        return this;
    }

    public Array1DTracer select(Object... args) {
        Tracer.addTrace(key, "select", args);
        return this;
    }

    public Array1DTracer deselect(Object... args) {
        Tracer.addTrace(key, "deselect", args);
        return this;
    }

    public Array1DTracer chart(Object... args) {
        Tracer.addTrace(key, "chart", args);
        return (Array1DTracer) this;
    }
}