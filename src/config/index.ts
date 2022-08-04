/* eslint-disable security/detect-object-injection */
import { corsConfig } from './cors';

const environment = process.env.NODE_ENV as string;

interface IMainConfig {
  environment: string;
  development: Config;
  testing: Config;
  staging: Config;
  production: Config;
}
type Config = { environment: string; port: number };

const config: IMainConfig = {
  environment,
  development: {
    environment: 'development',
    port: 5423,
  },
  testing: {
    environment: 'testing',
    port: 5008,
  },
  staging: {
    environment: 'staging',
    port: 5010,
  },
  production: {
    environment: 'production',
    port: 5011,
  },
};

export { corsConfig };
export default config;
// export default config[config.environment] as Config;
