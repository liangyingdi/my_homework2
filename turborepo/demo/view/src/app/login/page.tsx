'use client';
import styles from "../page.module.css";
import Image from "next/image";
import img from "../../../public/next.svg";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authenticateUser } from "./action";
import { useInput } from "./components/input";

export default () => {
    const [tab, setTab] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [seconds, setSeconds] = useState(3);
    const [data, setData] = useState<resultType>();
    const [_username, username] = useInput({ name: 'username' });
    const [_password, password] = useInput({ type: 'password', name: 'password' });
    const router = useRouter();

    const formActioin = async (formdata: FormData) => {
        setIsLoading(true);
        try {
            setTimeout(async () => {
                const data = await authenticateUser(formdata);
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
                router.replace('/');
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [seconds, data]);

    return (
        <div className={styles.registerPage}>
            <Image
                src={img}
                alt="Next.js logo"
                width={580}
                height={358}
                priority
                className={styles.registerImg}
            />
            <div>
                <div className={styles.loginTab}>
                    <div className={tab === 0 ? styles.active : ""} onClick={() => setTab(0)}>密码登录</div>
                    <div className={tab === 1 ? styles.active : ""} onClick={() => setTab(1)}>三方登录</div>
                </div>
                <div className={styles.loginMain}>
                    {isLoading ?
                        <div>Loading...</div>
                        : data?.code === 0 ?
                            <div>登录成功，{seconds}秒后自动跳转...</div>
                            :
                            <form action={formActioin}>
                                <div className={styles.error}>{data?.msg}</div>
                                {username}
                                {password}
                                <br />
                                <div className={styles.loginBottom}>
                                    <button type="submit" disabled={!_username || (_password as string).length < 6}>登录</button>
                                    <Link href={`/register`}>
                                        注册用户
                                    </Link>
                                </div>
                            </form>
                    }
                </div>
            </div>
        </div>
    )
}
