'use server'
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function deleteCookie(name: string) {
    cookies().set(name, '', { maxAge: 0 });
    redirect('/login');
}

export const checkCookie = () => {
    const { value } = cookies().get('token') ?? {};
    if (!!value) {
        redirect('/');
    } else {
        redirect('/login');
    }
}

export const setCookie = (name: {[username: string]: string}) => {
    const token = btoa(JSON.stringify({
        name,
    }));
    cookies().set({
        name: 'token',
        value: token,
        maxAge: 120,
        httpOnly: true,
    });
    redirect('/');
}