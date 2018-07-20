cmake_minimum_required(VERSION 3.2)
project(tracers_test)

set(CMAKE_CXX_STANDARD 11)

include_directories(../src)

add_executable(tracers_test main.cpp)

target_link_libraries(tracers_test tracers)
