export class BaseError extends Error {
    private id: string
  
    constructor(message: string, id?: string) {
      super(message)
      this.id = id || 'base error'
    }
  
    public getId = () => {
      return this.id
    }
  }
  
  export class UnprocessableError extends BaseError {}
  export class UnauthorizedError extends BaseError {}
  export class ForbiddenError extends BaseError {}
  export class NotFoundError extends BaseError {}
  export class BadRequestError extends BaseError {}
  