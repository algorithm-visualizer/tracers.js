import path from 'path';

class Commander {
  constructor({ name }) {
    this.name = name;
    this.builderImageTag = `${this.name}-builder`;
    this.executerImageTag = `${this.name}-executer`;
  }

  get cwd() {
    return path.resolve(__dirname, this.name);
  }
}

export default Commander;