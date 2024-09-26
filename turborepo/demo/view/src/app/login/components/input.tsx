import { useMemo, useState } from "react"


export const useInput = ({ type = 'text', name, placeholder }: { type?: string, name: string, placeholder?: string }) => {
    const [state, setState] = useState<string>('');

    const input = useMemo(() => <>
        <label htmlFor={name}>{name}</label><br />
        <input id={name} placeholder={placeholder} name={name} type={type} onChange={e => setState(e.target.value)} value={state} />
        <br />
    </>, [type, name, state]);

    return [state, input];
}