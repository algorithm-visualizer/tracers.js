import path from 'path';

class Commander {
  constructor({ name }) {
    this.name = name;
    this.builderImageTag = `${this.name}-builder`;
    this.executorImageTag = `${this.name}-executor`;
  }

  get cwd() {
    return path.resolve(__dirname, this.name);
  }
}

export default Commander;
