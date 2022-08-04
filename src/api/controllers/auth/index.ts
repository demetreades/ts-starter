import { RequestHandler } from 'express';

interface IUser {
  username: string;
  password: string;
}

const login = ((req, res) => {
  const { username } = req.body as IUser;

  // eslint-disable-next-line no-console
  console.log(username);

  res.status(200).json({
    ok: true,
    message: 'login',
    data: {
      username,
    },
  });
}) as RequestHandler;

const logout = ((req, res) => {
  res.status(200).json({
    ok: true,
    message: 'logout',
  });
}) as RequestHandler;

export default { login, logout };
