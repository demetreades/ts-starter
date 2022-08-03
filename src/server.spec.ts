import { Response } from 'express';
import { createServer } from 'http';
import request from 'supertest';
import { expect } from 'chai';
import { startApp } from './app';

const app = startApp();
const server = createServer(app);

describe('create server check', () => {
  it('server is created without error', async () => {
    await request(server)
      .get('/health/check')
      .expect((err: Error, res: Response) => {
        if (err) {
          throw err;
        }

        expect(res.statusCode).equal(200);
      });
  });
});
