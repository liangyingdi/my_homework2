import React, { useState } from 'react';
import styles from "../page.module.css";

const Modal = ({ isOpen, onClose, onConfirm }: { isOpen: boolean, onClose: () => void, onConfirm: (val: string) => void }) => {
    if (!isOpen) return null;

    const [name, setName] = useState("");

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <label>name</label><input type="text" className={styles.modalInput} onChange={e => setName(e.target.value)}/>
                <div className={styles.modalBtnWrapper}>
                    <button className={`${styles.modalButton} ${styles.confirm}`} onClick={() => onConfirm(name)} disabled={name.length === 0}>添加</button>
                    <button className={styles.modalButton} onClick={onClose}>取消</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;