import { Response } from 'express';
import request from 'supertest';
import { expect } from 'chai';
import { startApp } from './app';

const app = startApp();

describe('start app check', () => {
  context('startApp()', () => {
    it('app is created without error', async () => {
      await request(app)
        .get('/health/check')
        .expect((err: Error, res: Response) => {
          if (err) {
            throw err;
          }

          expect(res.statusCode).equal(200);
        });
    });
  });
});
