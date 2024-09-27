'use client';

import Link from "next/link";
import styles from "./page.module.css";
import { createContext, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import LogoutModal from "./components/logoutModal";
import { checkCookie, deleteCookie } from "./utils";

const defaultName = 'default';

export const context = createContext({
    name: defaultName,
    setName: (f: SetStateAction<string>) => { },
    id: 0,
    setId: (f: SetStateAction<number>) => { },
    userId: 0,
    setUserId: (f: SetStateAction<number>) => { },
});

export const useInfo = () => useContext(context);

export const PageProvider = ({ children }: { children: ReactNode }) => {

    const [name, setName] = useState(defaultName);
    const [id, setId] = useState(0);
    const [userId, setUserId] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const confirmModal = async () => {
        // 调用函数删除登录Token
        closeModal();
        await deleteCookie('token');
    };

    useEffect(() => {
        checkCookie();
    },[])

    return (
        <context.Provider value={{ name, setName, id, setId, userId, setUserId }}>
            <div className={styles.header}>
                <div className={styles.title}>VIEW DEMO</div>
                <div className={styles.info}>
                    <div>lyd</div>
                    <button onClick={openModal}>logout</button>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className={styles.leftWrapper}>
                    <Link href={`/list`}><button className={styles.leftButton}>List</button></Link><br />
                    <Link href={`b`}><button className={styles.leftButton}>Setting </button></Link><br />
                    <Link href={`c`}><button className={styles.leftButton}>Client</button></Link><br />
                </div>
                <div className={styles.rightWrapper}>
                    {children}
                </div>
            </div>
            <LogoutModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onConfirm={confirmModal}
            />
        </context.Provider>
    )

};