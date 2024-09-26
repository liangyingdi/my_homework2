'use client';
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../../context";

export default () => {
    const { toggleTheme } = useContext(ThemeContext);
    const [inputText, setInputText] = useState('');
    const textRef = useRef<HTMLInputElement>(null);
    const [displayStyle, setDisplayStyle] = useState({ opacity: 0, backgroundColor: "green" });

    const handleInputChange = (e: any) => {
        const color = e.target.value
        setInputText(color);

    };

    const handleChangeTheme = () => {
        if (inputText === 'green') {
            toggleTheme(inputText);
        }
    }

    const handleButtonClick = () => {
        const width = textRef.current && textRef.current.offsetWidth || 0;
        let backgroundColor;
        if (width > 40) {
            backgroundColor = 'red';
        } else {
            backgroundColor = 'green';
        }

        if (displayStyle.opacity === 0) {
            setDisplayStyle({ opacity: 1, backgroundColor });
        } else {
            setDisplayStyle({ opacity: 0, backgroundColor });
        }
    };
    return (
        <div>
            <input type="text" value={inputText} onChange={handleInputChange} /><br />
            <button onClick={handleButtonClick}>btn1</button>
            <button onClick={handleChangeTheme}>btn2</button>
            <span ref={textRef} style={displayStyle}>{inputText}</span>
        </div>
    )
}