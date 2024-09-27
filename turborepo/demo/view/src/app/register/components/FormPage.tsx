'use client';
import { useRouter } from "next/navigation";
import styles from "../../page.module.css";
import { action } from "../action";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { setCookie } from "../../utils";

export const FormPage = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [seconds, setSeconds] = useState(3);
    const [data, setData] = useState<resultType>();
    const { data: sessionData, status } = useSession();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    console.log(sessionData)
    console.log(status)

    // const [_username, username, setUserName] = useInput({ name: 'username' });
    // const [_password, password] = useInput({ type: 'password', name: 'password', placeholder: '密码不能小于6位' });
    const router = useRouter();

    useEffect(() => {
        if (sessionData) {
            setUserName(sessionData.user?.name || '');
        }
    }, [sessionData])

    const formActioin = async (formdata: FormData) => {
        setIsLoading(true);
        try {
            setTimeout(async () => {
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

    const handleSkip = () => {
        setCookie({username: username});
    }

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
                            <label htmlFor={"username"}>username</label><br />
                            <input id={"username"} name={"username"} type="text" onChange={e => setUserName(e.target.value)} value={username} />
                            <br />
                            <label htmlFor={"password"}>password</label><br />
                            <input id={"password"} name={"password"} type="password" onChange={e => setPassword(e.target.value)} value={password} autoComplete="new-password" />
                            <br />
                            {/* {username}
                            {password} */}
                            <br />
                            <div className={styles.registerBtns}>
                                <button disabled={!username || password.length < 6}>注册</button>
                                {status === "authenticated" && <a onClick={handleSkip} style={{cursor: "pointer"}}>跳过登录</a>}
                            </div>
                        </form>
                    </div>
            }
        </div>
    )
}