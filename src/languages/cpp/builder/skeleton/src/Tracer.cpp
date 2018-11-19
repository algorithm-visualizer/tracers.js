#include <string>
#include <fstream>
#include <cstdlib>
#include <json.hpp>
#include "Tracer.h"

using namespace std;
using json = nlohmann::json;

int Tracer::tracerCount = 0;
json Tracer::traces = json::array();

const long Tracer::maxTraces = stol(getenv("MAX_TRACES"));
const long Tracer::maxTracers = stol(getenv("MAX_TRACERS"));

string Tracer::addTracer(string className, string title) {
    string key = to_string(tracerCount++) + "-" + className + "-" + title;
    string method = "construct";
    addTrace(key, method, json::array({className, title}));
    return key;
}

void Tracer::addTrace(string tracerKey, string method, json args) {
    traces.push_back({
                             {"tracerKey", tracerKey},
                             {"method",    method},
                             {"args",      args},
                     });
    if (traces.size() > maxTraces) throw overflow_error("Traces Limit Exceeded");
    if (tracerCount > maxTracers) throw overflow_error("Tracers Limit Exceeded");
}

Tracer::Tracer(string className, string title) {
    if (title.empty()) title = className;
    key = addTracer(className, title);
}

void Tracer::onExit() {
    ofstream fout("traces.json");
    fout << traces.dump();
    fout.close();
}

int init() {
    atexit(Tracer::onExit);
    return 0;
}

int _ = init();