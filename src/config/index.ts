import { corsConfig } from './cors';

const enviroment = process.env.NODE_ENV as string;

const config = {
  development: {
    enviroment: 'development',
    port: 5423,
  },
  testing: {
    enviroment: 'testing',
    port: 5008,
  },
  staging: {
    enviroment: 'staging',
    port: 5010,
  },
  production: {
    enviroment: 'production',
    port: 5011,
  },
};

export { corsConfig };
export default config[enviroment];
