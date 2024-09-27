// 'use server';
import styles from "./page.module.css";
import Image from "next/image";
import { PageProvider } from "./context";
import img from "../../public/next.svg";

export default ({ children }: { children: JSX.Element }) => {
    return (
        <div className={styles.page}>
            <PageProvider>
                <Image
                    src={img}
                    alt="Next.js logo"
                    width={580}
                    height={358}
                    priority
                    className={styles.img}
                />
            </PageProvider>
        </div>
    )
}