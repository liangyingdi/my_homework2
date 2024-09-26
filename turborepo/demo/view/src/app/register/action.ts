'use server';

import { cookies, headers } from "next/headers";
import { sign } from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client'

export const action = async (formdata: FormData): Promise<RegisterResponse> => {
    'use server';

    const prisma = new PrismaClient();

    const username = formdata.get('username');
    const password = formdata.get('password');

    try {
        const newUser = await prisma.user.create({
            data: {
                username,
                password,
            },
        });

        if (newUser.username === username) {
            // const token = btoa(JSON.stringify({
            //     username,
            // }));
            // cookies().set({
            //     name: 'token',
            //     value: token,
            //     maxAge: 120,
            //     httpOnly: true,
            // });
            // const jwt = sign({ username }, process.env.NAME || '', {
            //     expiresIn: 10,
            // });
            return {
                code: 0,
                // jwt,
            };
        } else {
            return {
                code: 1,
                msg: '注册失败，请联系管理员',
            };
        }
    } catch (e) {
        return {
            code: 1,
            msg: '注册失败，请联系管理员',
        };
    }
}
