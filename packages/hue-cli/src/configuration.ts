import Conf from 'conf';
import pkg from '../package.json';

const config = new Conf({
  projectName: pkg.name,
  schema: {
    bridge: {
      type: 'string',
    },
    token: {
      type: 'string',
    },
  },
});

export default config;
