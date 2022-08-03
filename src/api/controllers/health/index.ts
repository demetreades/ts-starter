import { RequestHandler } from 'express';

const check = ((req, res) => {
  res.status(200).json({
    ok: true,
  });
}) as RequestHandler;

export default { check };
