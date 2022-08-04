import { Request, RequestHandler } from 'express';

const get = ((req, res) => {
  res.status(200).json({
    ok: true,
    message: 'user get',
  });
}) as RequestHandler;

const getAll = ((req, res) => {
  res.status(200).json({
    ok: true,
    message: 'user getAll',
  });
}) as RequestHandler;

interface IRequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const register = ((req: IRequestWithBody, res) => {
  const { body } = req.body;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { email, username, password } = JSON.parse(body as string);

  // eslint-disable-next-line no-console
  console.log(username, email, password);

  res.status(200).json({
    ok: true,
    message: 'user register',
    // data: {
    //   ...((username && { username }) ?? { username: 'no username' }),
    //   ...((email && { email }) ?? { email: 'no email' }),
    // },
  });
}) as RequestHandler;

const update = ((req, res) => {
  res.status(200).json({
    ok: true,
    message: 'user update',
  });
}) as RequestHandler;

const partialUpdate = ((req, res) => {
  res.status(200).json({
    ok: true,
    message: 'user partialUpdate',
  });
}) as RequestHandler;

const remove = ((req, res) => {
  res.status(200).json({
    ok: true,
    message: 'user remove',
    data: req.body as object,
  });
}) as RequestHandler;

export default {
  get,
  getAll,
  register,
  update,
  partialUpdate,
  remove,
};
