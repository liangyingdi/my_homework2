'use client';

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Modal from "./components/modal";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useInfo } from "../context";

export default () => {
    const [isModalOpen, setModalOpen] = useState(false);

    let userId = 6;
  
    const {setName, name, id, setId, setUserId} = useInfo();
    const [names, setNames] = useState([{ id: 1, name: '123' }, { id: 2, name: 'lisi' }]);
    const path = usePathname();
    //todo

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const confirmModal = (val: string) => {
        closeModal();
    };

    useEffect(() => {
        setUserId(userId)
    }, [])

    const handleClick = (item: {id: number, name: string}) => {
        setName(item.name);
        setId(item.id);
    }
    return (
        <>
            <div className={styles.listWrapper}>
                <div className={styles.toolsWrapper}>
                    <button className={styles.listBtn} onClick={openModal}>添加项目</button>
                </div>
                <div className={styles.listMain}>
                    {names.map(item => (
                        <Link href={`${path}/${userId}/item/${item.id}`} key={item.id}>
                            <div key={item.id} className={styles.item} onClick={() => handleClick(item)}>
                                {item.name}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                onConfirm={confirmModal}
            />
        </>
    )
}