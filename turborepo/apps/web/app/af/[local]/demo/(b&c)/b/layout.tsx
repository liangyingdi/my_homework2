'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../context";

export default ({ children, b1 }: { children: ReactNode, b1: ReactNode }) => {
    const path = usePathname();
    const [baseName, setBaseName] = useState("");
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const listener = () => console.log('path', path);
        window.addEventListener('click', listener);
        return () => window.removeEventListener('click', listener);
    }, []);

    useEffect(() => {
        if (path.endsWith("/b")) {
            setBaseName(path + '/bb');
        } else {
            setBaseName(path);
        }
    }, [path])

    return (
        <div>
            <Link href={baseName}>
                <div style={{ borderBottom: `2px solid ${theme}`, height: '60px' }}>
                    to bb
                </div>
            </Link>
            <div style={{ display: 'flex', flexDirection: "row", height: "240px" }}>
                <div style={{ flex: 1, borderRight: `2px solid ${theme}` }}>{children}</div>
                <div style={{ flex: 1 }}>{b1}</div>
            </div>
        </div>
    )
}