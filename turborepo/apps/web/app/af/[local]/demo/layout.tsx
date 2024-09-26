"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useState } from "react";
import { ThemeContext} from './context';

function adjustRoute(route: string) {
    const index = route.indexOf("demo");
    return route.slice(0, index + 4);

}
export default ({ children }: { children: JSX.Element }) => {
    const path = usePathname();
    const baseName = adjustRoute(path);

    const [theme, setTheme] = useState('pink');
    
      const toggleTheme = (color: string) => {
        setTheme(color);
      };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div style={{ background: theme, height: '80px', fontSize: '24px' }}>
                DEMO
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ padding: '15px' }}>
                    <Link href={`${baseName}/a`}><button style={{ width: '60px', height: "30px" }}>to a </button></Link><br />
                    <Link href={`${baseName}/b`}><button style={{ width: '60px', height: "30px" }}>to b </button></Link><br />
                    <Link href={`${baseName}/c`}><button style={{ width: '60px', height: "30px" }}>to c </button></Link><br />
                </div>
                <div style={{ padding: '15px' }}>
                    {children}
                </div>
            </div>
        </ThemeContext.Provider>
    )
}