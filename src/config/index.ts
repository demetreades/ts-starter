/* eslint-disable security/detect-object-injection */
import { corsConfig } from './cors';

const enviroment = process.env.NODE_ENV as string;

interface MainConfig {
  enviroment: string;
  development: Config;
  testing: Config;
  staging: Config;
  production: Config;
}
type Config = { enviroment: string; port: number };

const config: MainConfig = {
  enviroment,
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
export default config;
// export default config[config.enviroment] as Config;
