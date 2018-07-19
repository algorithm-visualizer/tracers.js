#ifndef CPP_LOGTRACER_H
#define CPP_LOGTRACER_H

#include "Tracer.h"

class LogTracer : Tracer {
public:
    LogTracer(string title = "");

    LogTracer *print(json message);
};

#endif //CPP_LOGTRACER_H
