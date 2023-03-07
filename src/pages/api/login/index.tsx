import {PrismaClient} from "@prisma/client";
import type {NextApiRequest, NextApiResponse} from 'next'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {method} = req;

    if (method === "GET") {
        const users = await prisma.tb_user.findMany();
        return res.status(302).json({
            data: users
        })
    }
    if (method === "POST") {
        const { name } = req.body;
        const user = await prisma.tb_user.create({
            data: {
                name
            }
        })
        return res.status(201).json({
            data: user
        })
    }
    if (method === "PUT") {
        const { id, name } = req.body;
        const updateUser = await prisma.tb_user.update({
            where: {
                id: id
            },
            data: {
                name: name
            }
        })
        return res.status(200).json({
            data: updateUser
        })
    }
    if (method === "DELETE") {
        const { id } = req.body;
        await prisma.tb_user.delete({
            where: {
                id: id
            }
        })
        return res.status(204).json({
            message: "User Deleted"
        })
    }

    return res.status(404).json({message: 'Route Not Found'});
}

const Controller = {
    GET: async function (req: NextApiRequest, res: NextApiResponse) {
//        const users = await prisma.tb_user.findMany();
//        return res.status(200).json({
//            data: users
//        })
        return res.status(302).json({message: 'Route Not Found'});
    },
    POST: async function (req: NextApiRequest, res: NextApiResponse) {
//        const users = await prisma.tb_user.findMany();
//        return res.status(200).json({
//            data: users
//        })
        return res.status(201).json({message: 'Route Not Found'});
    },
    PUT: async function (req: NextApiRequest, res: NextApiResponse) {
//        const users = await prisma.tb_user.findMany();
//        return res.status(200).json({
//            data: users
//        })
        return res.status(200).json({message: 'Route Not Found'});
    },
    DELETE: async function (req: NextApiRequest, res: NextApiResponse) {
//        const users = await prisma.tb_user.findMany();
//        return res.status(200).json({
//            data: users
//        })
        return res.status(204).json({message: 'Route Not Found'});
    }
}