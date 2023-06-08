import { Request, Response } from 'express'
import { Pet, PetSchema, PetSexSchema, PetTypeSchema } from '../../common/pets'
import { z } from 'zod'
import { nanoid } from 'nanoid'
import PetsModel from '../model/pet'
import { Op } from 'sequelize'

export async function CreatePet(request: Request, response: Response) {
    const schema = PetSchema.omit({ id: true })
    const id = nanoid()

    try {
        const parse = schema.parse(request.body)

        await PetsModel.create({
            id,
            ...parse,
        })
            .then(() => {
                response.status(201).send({ id })
            })
            .catch((e) => {
                console.log(e)
                response.status(500).send()
            })
    } catch (e) {
        console.log(e)
        response.status(400).send()
    }
}

export async function EditPet(request: Request, response: Response) {
    const schema = z.object({
        id: z.string().nonempty(),
        changes: z.object({
            id: z.string().optional(),
            type: PetTypeSchema.optional(),
            avatar: z.string().url().optional(),
            name: z.string().nonempty().optional(),
            age: z.number().nonnegative().optional(),
            brand: z.string().nonempty().optional(),
            ownerName: z.string().nonempty().optional(),
            ownerPhone: z
                .string()
                .nonempty()
                .regex(/\(\d\d\)\d\d\d\d\d-\d\d\d\d/gm)
                .optional(),
            sex: PetSexSchema.optional(),
        }),
    })

    type EditRequest = z.infer<typeof schema>

    try {
        const parse: EditRequest = schema.parse(request.body)

        await PetsModel.update(
            { ...parse.changes, updatedAt: Date.now() },
            {
                where: {
                    id: parse.id,
                },
            }
        )
            .then((res) => {
                console.log(res)
                response.status(200).send({ id: parse.id, ...parse.changes })
            })
            .catch((e) => {
                console.log(e)
                response.status(500).send()
            })
    } catch (e) {
        console.log(e)
        response.status(400).send()
    }
}

export async function DeletePet(request: Request, response: Response) {
    const schema = z.object({
        id: z.string().nonempty(),
    })

    const parse = schema.safeParse(request.query)

    if (parse.success) {
        await PetsModel.destroy({
            where: { id: request.query.id },
            force: true,
        })
            .then((res) => {
                if (res == 1) {
                    response.status(204).send()
                } else {
                    response.status(404).send()
                }
            })
            .catch((e) => {
                console.log(e)
                response.status(500).send()
            })
    } else {
        response.status(400).send()
    }
}

export async function GetPet(request: Request, response: Response) {
    await PetsModel.findAll()
        .then((res) => {
            let parsePets: Pet[] = []

            for (let i = 0; i < res.length; i++) {
                parsePets.push(res[i].dataValues)
            }

            response.status(200).send(parsePets)
        })
        .catch((e) => {
            console.log(e)
            response.status(500).send()
        })
}

export async function SearchPet(request: Request, response: Response) {
    const schema = z.object({
        query: z.string().nonempty(),
    })

    try {
        const parse = schema.parse(request.query)

        await PetsModel.findAll({
            where: {
                [Op.or]: [
                    {
                        name: { [Op.iLike]: `%${parse.query}%` },
                    },
                    {
                        brand: { [Op.iLike]: `%${parse.query}%` },
                    },
                    {
                        ownerName: { [Op.iLike]: `%${parse.query}%` },
                    },
                    {
                        ownerPhone: { [Op.iLike]: `%${parse.query}%` },
                    },
                    {
                        type: { [Op.iLike]: `%${parse.query}%` },
                    },
                ],
            },
        })
            .then((res) => {
                let parsePets: Pet[] = []

                for (let i = 0; i < res.length; i++) {
                    parsePets.push(res[i].dataValues)
                }

                response.status(200).send(parsePets)
            })
            .catch((e) => {
                console.log(e)
                response.status(500).send()
            })
    } catch (e) {
        response.status(400).send()
    }
}
