import * as modules from '../';

export default code => {
  const require = name => ({ 'algorithm-visualizer': modules }[name]); // fake require
  eval(code);
};