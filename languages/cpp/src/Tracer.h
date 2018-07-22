#ifndef CPP_TRACER_H
#define CPP_TRACER_H

#include <string>
#include <json.hpp>

class Tracer {
protected:
    using string = std::string;
    using json = nlohmann::json;

private:
    static int tracerCount;
    static json traces;

    static const long maxTraces;
    static const long maxTracers;

    static string addTracer(string className, string title);

protected:
    static void addTrace(string tracerKey, string method, json args);

    string key;

    Tracer(string className, string title);

public:
    static void onExit();
};

#endif //CPP_TRACER_H
