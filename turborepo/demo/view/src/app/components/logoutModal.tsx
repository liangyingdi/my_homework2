import React, { useState } from 'react';
import styles from "../page.module.css";

const LogoutModal = ({ isOpen, onClose, onConfirm }: { isOpen: boolean, onClose: () => void, onConfirm: () => void }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <div className={styles.modalTitle}>是否确认登出</div>
                <div className={styles.modalBtnWrapper}>
                    <button className={`${styles.modalButton} ${styles.confirm}`} onClick={onConfirm}>确认</button>
                    <button className={styles.modalButton} onClick={onClose}>取消</button>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;