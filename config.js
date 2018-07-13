import path from 'path';
import fs from 'fs';
import { exec } from 'child_process';
import * as tracers from './specs/tracers';
import * as randomizers from './specs/randomizers';

const common = {
  spec: function (callback, all = false) {
    Object.values(all ? { ...tracers, ...randomizers } : tracers).forEach(tracer => {
      const { name, content } = callback(tracer);
      const outputPath = path.resolve(this.cwd, this.srcPath, name);
      fs.writeFileSync(outputPath, content);
    });
    return this;
  },
  index: function (callback, all = false) {
    const { name, content } = callback(Object.values(all ? { ...tracers, ...randomizers } : tracers));
    const outputPath = path.resolve(this.cwd, this.srcPath, name);
    fs.writeFileSync(outputPath, content);
    return this;
  },
  build: function () {
    const buildProcess = exec(`${this.buildCommand} && cp ${this.buildPath} ${path.resolve(__dirname, 'release', this.releaseFileName)}`, { cwd: this.cwd });
    buildProcess.stdout.pipe(process.stdout);
    buildProcess.stderr.pipe(process.stderr);
    buildProcess.on('exit', process.exit);
    return this;
  },
};

export const docs = {
  ...common,
  cwd: path.resolve(__dirname, 'docs'),
  srcPath: '',
  build: undefined,
};

export const java = {
  ...common,
  cwd: path.resolve(__dirname, 'languages/java'),
  srcPath: 'src/main/java/org/algorithm_visualizer/tracers',
  buildPath: 'build/libs/tracers-2.0-all.jar',
  releaseFileName: 'java.jar',
  buildCommand: './gradlew shadowJar',
};

export const js = {
  ...common,
  cwd: path.resolve(__dirname, 'languages/js'),
  srcPath: 'src',
  buildPath: 'build/index.js',
  releaseFileName: 'js.js',
  buildCommand: 'npm install && npm run build',
};