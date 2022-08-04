import { RequestHandler, Request } from 'express';

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

interface IUser {
  username: string;
  password?: string;
}

const register = ((req, res) => {
  const { username } = req.body as IUser;

  // eslint-disable-next-line no-console
  console.log(username);

  res.status(200).json({
    ok: true,
    message: 'user register',
    data: {
      username,
    },
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
