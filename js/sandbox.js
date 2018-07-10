import * as modules from './modules';

export default code => {
  const require = name => ({ 'algorithm-visualizer': modules }[name]); // fake require
  eval(code);
};