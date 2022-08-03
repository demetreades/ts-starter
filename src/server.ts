import { createServer } from 'http';
import { log } from './utils';
import { startApp } from './app';

const server = createServer(startApp());

server.listen(5423, () => log.info('server listening at: 5423'));
