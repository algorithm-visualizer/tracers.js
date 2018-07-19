cmake_minimum_required(VERSION 3.10)
project(cpp)

set(CMAKE_CXX_STANDARD 11)

add_library(cpp Tracer.cpp Tracer.h LogTracer.cpp LogTracer.h)