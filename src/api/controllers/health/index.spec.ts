import request from 'supertest';
import { startApp } from '@/app';
import { log } from '@/utils';

const app = startApp();

log.debug(`env: ${process.env.NODE_ENV as string}`);

describe('health controller', () => {
  context('GET /health/check', () => {
    it('it should return 200 status', async () => {
      await request(app)
        .get('/health/check')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200);
    });
  });
});
