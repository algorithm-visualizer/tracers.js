#include "LogTracer.h"

LogTracer::LogTracer(string title) : Tracer("LogTracer", title) {
}

LogTracer *LogTracer::print(json message) {
    addTrace(key, "print", json::array({message}));
    return this;
}