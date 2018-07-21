import path from 'path';
import fs from 'fs-extra';
import child_process from 'child_process';
import * as tracers from './specs/tracers';
import * as randomizers from './specs/randomizers';

class Commanders {
  constructor({ name, srcDir, buildDir, buildCommands }) {
    this.name = name;
    this.srcDir = srcDir;
    this.buildDir = buildDir;
    this.buildCommands = buildCommands;
  }

  get cwd() {
    return path.resolve(__dirname, 'languages', this.name);
  }

  get srcPath() {
    return path.resolve(this.cwd, this.srcDir);
  }

  get buildPath() {
    return path.resolve(this.cwd, this.buildDir);
  }

  get libPath() {
    return path.resolve(__dirname, 'libs', this.name);
  }

  spec(callback, all = false) {
    Object.values(all ? { ...tracers, ...randomizers } : tracers).forEach(tracer => {
      const { name, content } = callback(tracer);
      const outputPath = path.resolve(this.srcPath, name);
      fs.writeFileSync(outputPath, content);
    });
    return this;
  }

  index(callback, all = false) {
    const { name, content } = callback(Object.values(all ? { ...tracers, ...randomizers } : tracers));
    const outputPath = path.resolve(this.srcPath, name);
    fs.writeFileSync(outputPath, content);
    return this;
  }

  build() {
    fs.removeSync(this.buildPath);
    fs.removeSync(this.libPath);
    const buildProcess = child_process.exec(this.buildCommands.join(' && '), { cwd: this.cwd });
    buildProcess.stdout.pipe(process.stdout);
    buildProcess.stderr.pipe(process.stderr);
    buildProcess.on('exit', code => {
      if (code === 0) {
        fs.copySync(this.buildPath, this.libPath);
      }
      process.exit(code);
    });
    return this;
  }
}

export const cppCommander = new Commanders({
  name: 'cpp',
  srcDir: 'src',
  buildDir: 'build/out',
  buildCommands: [
    'mkdir -p build',
    'cd build',
    'cmake ..',
    'make',
    'mkdir -p out/include',
    'cp ../include/* ../src/*.h out/include',
  ],
});

export const docsCommander = new Commanders({
  name: 'docs',
  srcDir: 'src',
  buildDir: 'build',
  buildCommands: [
    'mkdir -p build',
    'cp src/* build',
  ],
});

export const javaCommander = new Commanders({
  name: 'java',
  srcDir: 'src/main/java/org/algorithm_visualizer/tracers',
  buildDir: 'build/libs',
  buildCommands: [
    './gradlew shadowJar',
  ],
});

export const jsCommander = new Commanders({
  name: 'js',
  srcDir: 'src',
  buildDir: 'build',
  buildCommands: [
    'npm install',
    'npm run build',
  ],
});