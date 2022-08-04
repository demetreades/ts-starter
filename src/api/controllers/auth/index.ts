import { RequestHandler, Request } from 'express';
import HttpException from '@/utils/exceptions/HttpException';

interface IRequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const login = ((req: IRequestWithBody, res) => {
  const { username, email, password } = req.body;

  // eslint-disable-next-line no-console
  console.log(username, email, password);

  const localMail = 'uza@neim.com';
  const localPass = '7815696ecbf1c96e6894b779456d330e';

  if (email && password && (email !== localMail || password !== localPass)) {
    throw new HttpException(401, 'wrong email or password');
  }

  req.session = { loggedIn: true };

  res.status(200).json({
    ok: true,
    message: 'login',
    data: {
      ...((username && { username }) ?? { username: 'no username' }),
      ...((email && { email }) ?? { email: 'no email' }),
    },
  });
}) as RequestHandler;

const logout = ((req, res) => {
  req.session = undefined;

  res.status(200).json({
    ok: true,
    message: 'logout',
  });
}) as RequestHandler;

export default { login, logout };
