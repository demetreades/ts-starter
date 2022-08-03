import express, { Application, RequestHandler, ErrorRequestHandler } from 'express';
import helmet from 'helmet';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.get('/ok', (req, res): void => {
  res.status(200).json({
    ok: true,
  });
});

const handleNotFound: RequestHandler = (req, res, next) => {
  const error = new Error('endpoint not found');

  next(error);
};

const handleErrors: ErrorRequestHandler = (err, req, res, next): void => {
  res.status(500).json({
    ok: false,
    status: 500,
  });
};

app.use(handleNotFound);
app.use(handleErrors);

// eslint-disable-next-line no-console
app.listen(5423, () => console.log('server listening at: 5423'));
