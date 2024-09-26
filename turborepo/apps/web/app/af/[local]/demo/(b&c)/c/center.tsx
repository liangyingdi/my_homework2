"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useOptimistic } from "react";

export default ({ flag }: { flag: number }) => {
    const path = usePathname();
    const [text, setText] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const [opt, addOpt] = useOptimistic("", (state, value: string) => {
        return value;
    });

    useEffect(() => {
        if (flag > 0) {
            inputRef.current && inputRef.current.focus();
        }
    }, [flag])

    const submit = async (fd: FormData) => {
        addOpt("提交完了");
        await fetch('/opt');
    }

    useEffect(() => {
        if (text === "999") {
            throw new Error(text);
        }
    }, [text])

    return (
        <div style={{ marginBottom: "30px" }}>
            <p>{opt}</p>
            <input type="text" ref={inputRef} onChange={(e) => setText(e.target.value)} /><br />
            <Link href={`${path}/${text}`}>to c/id</Link> <br />
            <form action={submit}>
                <button type="submit">opt</button>
            </form>
        </div>
    )
}