import { ITutor } from "./Tutor"

export interface IPet {
    id?: number
    name?: string
    species?: string
    breed?: PetBreed
    tutorId?: number

    // Relations
    tutor?: ITutor
}

export enum PetBreed {
    DOG = 'dog',
    CAT = 'cat'
}