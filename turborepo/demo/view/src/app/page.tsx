'use client';
import styles from "./page.module.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageProvider } from "./context";
import img from "../../public/next.svg";

export default ({ children }: { children: JSX.Element }) => {
    const path = usePathname();

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