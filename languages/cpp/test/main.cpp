#include <string>
#include <iostream>
#include "LogTracer.h"
#include "Randomize.h"

using namespace std;
using namespace Randomize;

int main() {
    int N = 5;
    int **graph = Graph<int>(N, 1, *(new Integer(1, 5))).weighted(true).create();
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            cout << graph[i][j] << " ";
        }
        cout << endl;
    }
//    int **arr = randomizer->create();
    return 0;
}
