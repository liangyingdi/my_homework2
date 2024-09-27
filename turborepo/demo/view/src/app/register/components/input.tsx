// 'use client';
import { useMemo, useState } from "react"
import styles from "../../page.module.css";


export const useInput = ({ type = 'text', name, placeholder, value = "" }: { type?: string, name: string, placeholder?: string, value?: string }) => {
    const [state, setState] = useState<string>(value);

    const input = useMemo(() => <>
        <label htmlFor={name} className={(type === "password" && state.length < 6) ? styles.registerPassword : ""}>{name}</label><br />
        <input id={name} placeholder={placeholder} name={name} type={type} onChange={e => setState(e.target.value)} value={state} />
        <br />
    </>, [type, name, state]);

    return [state, input, setState];
}