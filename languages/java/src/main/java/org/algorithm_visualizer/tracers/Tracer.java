package org.algorithm_visualizer.tracers;

import com.google.gson.Gson;

public abstract class Tracer {
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

    private static String addTracer(String className, String title) {
        String key = String.format("%d-%s-%s", tracerCount++, className, title);
        String method = "construct";
        Object[] args = new Object[]{className, title};
        addTrace(key, method, args);
        return key;
    }

    protected static void addTrace(String tracerKey, String method, Object[] args) {
        Trace trace = new Trace(tracerKey, method, args);
        System.out.println(gson.toJson(trace));
        if (++traceCount > maxTraces) throw new Error("Traces Limit Exceeded");
        if (tracerCount > maxTracers) throw new Error("Tracers Limit Exceeded");
    }

    protected String key;

    protected Tracer(String title) {
        if (title == null) title = this.getClass().getSimpleName();
        key = Tracer.addTracer(this.getClass().getSimpleName(), title);
    }
}