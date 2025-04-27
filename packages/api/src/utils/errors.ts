export class CustomError extends Error {
  constructor(
    public message: string,
    public statusCode: number = 500,
    public errors: any[] = []
  ) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
} 