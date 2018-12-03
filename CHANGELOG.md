# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.6]
### Added
- Add fill methods in C++ Array1D/Array2D/Graph Randomizers.
- Add updateNode(), removeNode(), updateEdge(), and removeEdge() in GraphTracer.

### Changed
- Improve catching time limit exceeded.
- Change the order of arguments of addNode() in GraphTracer.

## [2.0.5]
### Changed
- Build tracers from skeletons.
- Build docs separately from tracers.

## [2.0.5]
### Added
- Add memory/time limits.

## [2.0.4]
### Fixed
- Load limits from /common/config.

## [2.0.3]
### Fixed
- Handle unhandled promise rejections.

## [2.0.2]
### Fixed
- Build executer's Docker images only when building tracers libraries.

## [2.0.1]
### Added
- Dockerize the building process.

### Changed
- Change the project structure.

## [2.0.0]
### Added
- Tracers for Java and C++.

### Changed
- Almost every method has been changed. Take a look at [Tracer API](https://github.com/algorithm-visualizer/tracers/wiki).
