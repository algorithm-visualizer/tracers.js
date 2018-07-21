import { cppCommander } from '../commanders';

cppCommander.spec(tracer => {
  const name = `${tracer.name}.h`;
  const content = `#ifndef CPP_${tracer.name.toUpperCase()}_H
#define CPP_${tracer.name.toUpperCase()}_H

#include "Tracer.h"

class ${tracer.name} : Tracer {
public:
    ${tracer.name}(string title = "");
${tracer.methods.filter(method => method.return !== 'new').map(method => {
    const optionals = method.arguments.filter(argument => argument.default);
    const definitions = [];
    for (let i = 0; i <= optionals.length; i++) {
      const args = method.arguments.slice(0, method.arguments.length - i);
      definitions.push(`
    ${method.return} ${method.name}(${args.map(argument => `json ${argument.name}`).join(', ')});`);
    }
    return definitions.join('\n');
  }).join('\n')}
};

#endif
`;

  return { name, content };
}).spec(tracer => {
  const name = `${tracer.name}.cpp`;
  const content = `#include "${tracer.name}.h"

${tracer.name}::${tracer.name}(string title) : Tracer("${tracer.name}", title) {
}
${tracer.methods.filter(method => method.return !== 'new').map(method => {
    const optionals = method.arguments.filter(argument => argument.default);
    const definitions = [];
    for (let i = 0; i <= optionals.length; i++) {
      const args = method.arguments.slice(0, method.arguments.length - i);
      definitions.push(`
${tracer.name} ${tracer.name}::${method.name}(${args.map(argument => `json ${argument.name}`).join(', ')}) {
    addTrace(key, "${method.name}", json::array({${args.map(argument => argument.name).join(', ')}}));
    return *this;
}`);
    }
    return definitions.join('\n');
  }).join('\n')}
`;

  return { name, content };
}).index(tracers => {
  const name = 'CMakeLists.txt';
  const content = `cmake_minimum_required(VERSION 3.2)
project(tracers)

set(CMAKE_CXX_STANDARD 11)

add_library(tracers Tracer.cpp ${tracers.map(tracer => `${tracer.name}.cpp`).join(' ')})

set_target_properties(tracers
    PROPERTIES
    PREFIX ""
    ARCHIVE_OUTPUT_DIRECTORY "\${CMAKE_BINARY_DIR}/out/lib"
)
`;
  return { name, content };
}).build();