import { RequestHandler } from 'express';

const create = ((req, res) => {
  res.status(200).json({
    ok: true,
  });
}) as RequestHandler;

export default { create };
