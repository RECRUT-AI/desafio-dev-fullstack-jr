import z from 'zod'

export const PetSexSchema = z.enum(['Male', 'Female'])

export type PetSex = z.infer<typeof PetSexSchema>

export const PetTypeSchema = z.enum(['Cachorro', 'Gato'])

export type PetType = z.infer<typeof PetTypeSchema>

export const PetSchema = z.object({
    id: z.string(),
    type: PetTypeSchema,
    avatar: z.string().url(),
    name: z.string().nonempty(),
    age: z.number().nonnegative(),
    brand: z.string().nonempty(),
    ownerName: z.string().nonempty(),
    ownerPhone: z
        .string()
        .nonempty()
        .regex(/\(\d\d\)\d\d\d\d\d-\d\d\d\d/gm),
    sex: PetSexSchema,
})

export type Pet = z.infer<typeof PetSchema>
