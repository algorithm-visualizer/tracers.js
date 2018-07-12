package org.algorithm_visualizer.tracers;

public class Array1DTracer extends Tracer {
    public Array1DTracer(String title) {
        super(title);
    }

    public Array1DTracer() {
        this(null);
    }

    public Array1DTracer reset(Object... args) {
        addTrace(key, "reset", args);
        return this;
    }

    public Array1DTracer set(Object... args) {
        addTrace(key, "set", args);
        return this;
    }

    public Array1DTracer delay(Object... args) {
        addTrace(key, "delay", args);
        return this;
    }

    public Array1DTracer patch(Object... args) {
        addTrace(key, "patch", args);
        return this;
    }

    public Array1DTracer depatch(Object... args) {
        addTrace(key, "depatch", args);
        return this;
    }

    public Array1DTracer select(Object... args) {
        addTrace(key, "select", args);
        return this;
    }

    public Array1DTracer deselect(Object... args) {
        addTrace(key, "deselect", args);
        return this;
    }

    public Array1DTracer chart(Object... args) {
        addTrace(key, "chart", args);
        return this;
    }
}