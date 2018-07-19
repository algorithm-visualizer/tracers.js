package org.algorithm_visualizer.tracers;

import com.google.gson.Gson;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

public abstract class Tracer {
    private static Gson gson = new Gson();
    private static int tracerCount = 0;
    private static ArrayList<Trace> traces = new ArrayList<>();

    private static final int maxTraces = Integer.parseInt(System.getenv("MAX_TRACES"));
    private static final int maxTracers = Integer.parseInt(System.getenv("MAX_TRACERS"));

    private static class Trace {
        private String tracerKey;
        private String method;
        private Object[] args;

        Trace(String tracerKey, String method, Object[] args) {
            this.tracerKey = tracerKey;
            this.method = method;
            this.args = gson.fromJson(gson.toJson(args), Object[].class);
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
        traces.add(trace);
        if (traces.size() > maxTraces) throw new Error("Traces Limit Exceeded");
        if (tracerCount > maxTracers) throw new Error("Tracers Limit Exceeded");
    }

    protected String key;

    protected Tracer(String title) {
        String className = this.getClass().getSimpleName();
        if (title == null) title = className;
        key = Tracer.addTracer(className, title);
    }

    static {
        Runtime.getRuntime().addShutdownHook(new Thread(() -> {
            try {
                FileWriter fileWriter = new FileWriter("traces.json");
                PrintWriter printWriter = new PrintWriter(fileWriter);
                printWriter.print(gson.toJson(traces));
                printWriter.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }));
    }
}