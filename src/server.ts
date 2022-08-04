import { createServer } from 'http';
import { log } from './utils';
import { startApp } from './app';

const server = createServer(startApp());

interface IAddress {
  port: number;
  address: string;
}

log.debug('Server created');

server.listen(5423, () => {
  const { port, address } = server.address() as IAddress;

  log.info(`Server  running in "${process.env.NODE_ENV as string} mode" on ${address}:${port}`);
});
