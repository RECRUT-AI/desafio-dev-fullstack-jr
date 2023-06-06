import { NotFoundError } from "./BaseError";

export class TutorNotFoundError extends NotFoundError {
    constructor(
        message: string = "Tutor não encontrado"
    ) {
        super(message)
    }
}