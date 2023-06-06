import { BadRequestError } from "./BaseError";

export class InvalidBodyError extends BadRequestError {
    constructor(
        message: string = "Tutor não encontrado"
    ) {
        super(message)
    }
}