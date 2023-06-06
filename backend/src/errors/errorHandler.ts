import { BadRequestError, NotFoundError } from "./BaseError"

interface BaseError {
  data: {
    message: string
    details?: string
    stack?: string
  }
  status: number
}

export const handleRequestError = (error: any): BaseError => {
  if (error instanceof BadRequestError) {
    return {
      data: {
        message: error.message,
      },
      status: 400,
    }
  }

  if (error instanceof NotFoundError) {
    return {
      data: {
        message: error.message,
      },
      status: 404,
    }
  }

  return {
    data: {
      message: 'Internal Server Error',
      details: error.message,
      stack: error.stack,
    },
    status: 500,
  }
}

export const resolveJoiValidationError = (error: any) => {
  if (error && error.details) {
    if (
      Array.isArray(error.details) &&
      error.details[0] &&
      error.details[0].message
    ) {
      return error.details[0].message
    } else if (error.details.message) {
      return error.details.message
    }
  }

  return 'Validation error'
}
