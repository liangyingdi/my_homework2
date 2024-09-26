// 'use client';
import { useMemo, useState } from "react"
import styles from "../../page.module.css";


export const useInput = ({ type = 'text', name, placeholder }: { type?: string, name: string, placeholder?: string }) => {
    const [state, setState] = useState<string>('');

    const input = useMemo(() => <>
        <label htmlFor={name} className={(type === "password" && state.length < 6) ? styles.registerPassword : ""}>{name}</label><br />
        <input id={name} placeholder={placeholder} name={name} type={type} onChange={e => setState(e.target.value)} value={state} />
        <br />
    </>, [type, name, state]);

    return [state, input];
}