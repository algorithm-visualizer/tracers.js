#include <string>
#include <iostream>
#include "LogTracer.h"
#include "GraphTracer.h"
#include "Randomize.h"

using namespace std;
using namespace Randomize;

int main() {
    int N = 5;
    int **graph = Graph<int>(N, .5, *(new Integer(1, 5))).weighted(true).directed(false).create();
    GraphTracer graphTracer;
    int arr[][2] = {{0, 1}, {1, 0}};
    graphTracer.set(arr);
    return 0;
}
