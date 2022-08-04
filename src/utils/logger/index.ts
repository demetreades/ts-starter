import { pino, stdSerializers } from 'pino';

const devConfig = {
  name: 'general',
  level: 'debug',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      ignore: 'pid,hostname,service',
      translateTime: 'SYS:mm-dd-yyyy HH:MM:ss',
    },
  },
  serializers: {
    req: stdSerializers.req,
    res: stdSerializers.res,
    err: stdSerializers.err,
    cause: stdSerializers.err,
  },
};

const isProduction = process.env.NODE_ENV === 'production';
const config = isProduction ? {} : devConfig;
const log = pino(config);

export { log };
