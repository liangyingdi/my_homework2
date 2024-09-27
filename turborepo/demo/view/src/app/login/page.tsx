// 'use server';
import styles from "../page.module.css";
import Image from "next/image";
import img from "../../../public/next.svg";
import { FormPage } from "./components/FormPage";

export default () => {
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
            <FormPage />
        </div>
    )
}