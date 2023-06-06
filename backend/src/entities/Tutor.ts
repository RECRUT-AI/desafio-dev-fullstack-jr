import { IPet } from "./Pet"

export interface ITutor {
  id?: number
  name?: string
  phone?: number

  // Relations
  pets?: IPet[]
}
