import { createServer } from 'http';
import { log } from './utils';
import { startApp } from './app';

const server = createServer(startApp());

log.debug('Server created');

server.listen(5423, () => log.info('Server listening at: 5423'));
