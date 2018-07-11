package org.algorithm_visualizer.tracers;

import com.google.gson.Gson;

public class Tracer<T extends Tracer<T>> {
    private static Gson gson = new Gson();
    private static int tracerCount = 0;
    private static int traceCount = 0;

    private static int maxTraces = Integer.parseInt(System.getenv("MAX_TRACES"));
    private static int maxTracers = Integer.parseInt(System.getenv("MAX_TRACERS"));

    private static class Trace {
        private String tracerKey;
        private String method;
        private Object[] args;

        Trace(String tracerKey, String method, Object[] args) {
            this.tracerKey = tracerKey;
            this.method = method;
            this.args = args;
        }
    }

    private static String addTracer(String className, String title, Options options) {
        String key = String.format("%d-%s-%s", tracerCount++, className, title);
        String method = "construct";
        Object[] args = new Object[]{className, title, options};
        addTrace(key, method, args);
        return key;
    }

    protected static void addTrace(String tracerKey, String method, Object[] args) {
        Trace trace = new Trace(tracerKey, method, args);
        System.out.println(gson.toJson(trace));
        if (++traceCount > maxTraces) throw new Error("Traces Limit Exceeded");
        if (tracerCount > maxTracers) throw new Error("Tracers Limit Exceeded");
    }

    protected String key = null;

    public static class Options {
    }

    public Tracer(String title, Options options) {
        if (title == null) title = this.getClass().getSimpleName();
        if (options == null) options = new Options();
        key = Tracer.addTracer(this.getClass().getSimpleName(), title, options);
    }

    public Tracer(String title) {
        this(title, null);
    }

    public Tracer(Options options) {
        this(null, options);
    }

    public Tracer() {
        this(null, null);
    }

    public T reset(Object... args) {
        Tracer.addTrace(key, "reset", args);
        return (T) this;
    }

    public T set(Object... args) {
        Tracer.addTrace(key, "set", args);
        return (T) this;
    }

    public T delay(Object... args) {
        Tracer.addTrace(key, "delay", args);
        return (T) this;
    }
}