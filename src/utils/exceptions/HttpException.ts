class HttpException extends Error {
  constructor(
    public statusCode: number = 500,
    public message: string = 'no message',
    public isOperational: boolean = true,
    public cause: object = {}
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.isOperational = isOperational;
  }
}

export default HttpException;
