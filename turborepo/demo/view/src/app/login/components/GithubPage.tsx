'use client';
import { signIn } from "next-auth/react";
import styles from "../../page.module.css";
import Link from "next/link";

export const GithubPage = () => {
    // const { data, status } = useSession();
    return (
        <div>
            {/* client
            <hr />
            status: {status}
            <br />
            data: {JSON.stringify(data)}
            <hr />
            <button onClick={() => signIn()}>sign in</button>
            <br />
            <button onClick={() => signIn('github', { callbackUrl: 'http://localhost:3000/auth' })}>sign in redirect</button>
            <hr />
            <button onClick={() => signOut()}>sign out</button>
            <br />
            <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/auth' })}>sign out redirect</button> */}
            <div className={styles.registerText}>AUTH_GITHUB_ID:{process.env.NEXT_PUBLIC_AUTH_GITHUB_ID}</div>
            <div className={styles.registerText}>NEXT_PUBLIC_AUTH_GITHUB_SECRET:{process.env.NEXT_PUBLIC_AUTH_GITHUB_SECRET}</div>
            <div className={styles.registerGitHubCenter}>
                <img
                    src="https://authjs.dev/img/providers/github.svg"
                    style={{ height: '50px' }}
                    onClick={() => signIn('github', { callbackUrl: 'http://localhost:3000/register' })}
                />
                <div>github login</div>
            </div>
            <Link href={`/register`} className={styles.registerBtn}>
                注册用户
            </Link>
        </div>
    )
}