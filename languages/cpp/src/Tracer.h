#ifndef CPP_TRACER_H
#define CPP_TRACER_H

#include <string>
#include "../include/json.hpp"

using namespace std;
using json = nlohmann::json;

class Tracer {
private:
    static int tracerCount;
    static json traces;

    static const int maxTraces = 1000000;
    static const int maxTracers = 100;

    static string addTracer(string className, string title);

protected:
    static void addTrace(string tracerKey, string method, json args);

    string key;

    Tracer(string className, string title);

public:
    static void onExit();
};

#endif //CPP_TRACER_H
