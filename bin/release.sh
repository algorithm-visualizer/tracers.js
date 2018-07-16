#!/usr/bin/env bash

if [ -z "$VERSION" ] || [ -z "$GITHUB_TOKEN" ]; then
    echo 'Either VERSION or GITHUB_TOKEN is empty.'
    exit 1
fi

PROJECT_ROOT="$(dirname "$0")/.."

TAG="v$VERSION"

(cd ${PROJECT_ROOT} && npm run build) && (

    (cd ${PROJECT_ROOT}/docs && git add . && git commit -m "${TAG}" && git push)

    (cd ${PROJECT_ROOT} && git submodule update --remote && git add . && git commit -m "Release ${TAG}" && git push)

    (cd ${PROJECT_ROOT} && ghr -u 'algorithm-visualizer' -r 'tracers' ${TAG} release/)

)