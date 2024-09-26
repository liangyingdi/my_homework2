'use client';
import { useRouter } from "next/navigation";
import styles from "../../page.module.css";
import { useInput } from "./input";
import { action } from "../action";
import { useActionState, useEffect, useState } from "react";
import { useFormState } from "react-dom";

export const FormPage = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [seconds, setSeconds] = useState(3);
    const [data, setData] = useState<resultType>();
    const [_username, username] = useInput({ name: 'username' });
    const [_password, password] = useInput({ type: 'password', name: 'password' });
    const router = useRouter();

    const formActioin = async (formdata: FormData) => {
        setIsLoading(true);
        try {
            setTimeout(async() => {
                const data = await action(formdata);
                setData(data);
                setIsLoading(false);
            }, 1000)
        } catch (error) {
            alert(`catch error: ${(error as Error).message}`);
            setIsLoading(false);
        } 
    }


    useEffect(() => {
        if (data?.code !== 0) return;
        const intervalId = setInterval(() => {
            if (seconds > 1) {
                setSeconds(seconds - 1);
            } else {
                clearInterval(intervalId);
                router.replace('/login');
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [seconds, data]);

    return (
        <div className={styles.registerMain}>
            {isLoading ?
                <div>Loading...</div>
                : data?.code === 0 ?
                    <div>注册成功，{seconds}秒后自动跳转到登录页</div>
                    :
                    <div>
                        <form action={formActioin} >
                            <div className={styles.error}>{data?.msg}</div>
                            {username}
                            {password}
                            <br />
                            <button disabled={!_username || (_password as string).length < 6}>注册</button>
                        </form>
                    </div>
            }
        </div>
    )
}