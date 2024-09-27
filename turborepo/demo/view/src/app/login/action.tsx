'use server';

import { cookies, headers } from "next/headers";
// import { sign } from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client'

export const authenticateUser = async (formdata: FormData): Promise<LoginResponse> => {
    'use server';
    const prisma = new PrismaClient();

    const username = formdata.get('username');
    const password = formdata.get('password');
    
    return new Promise((resolve, reject) => {
        prisma.user.findMany({
            where: {
                username,
                password
            },
        }).then((user: User[]) => {
            const firstOne = user[0];
            if (firstOne && firstOne.password === password) {
                const token = btoa(JSON.stringify({
                    username,
                }));
                cookies().set({
                    name: 'token',
                    value: token,
                    maxAge: 120,
                    httpOnly: true,
                });
                // const jwt = sign({ username }, process.env.NAME || '', {
                //     expiresIn: 10,
                // });
                resolve({ code: 0 });
            } else {
                resolve({ code: 1, msg: '用户名或密码错误' });
            }
        }).catch((error: any) => {
            // reject({ code: 2, msg: '数据库查询出错', error });
            resolve({ code: 2, msg: '登录失败，请联系管理员' });
        });
    });
};