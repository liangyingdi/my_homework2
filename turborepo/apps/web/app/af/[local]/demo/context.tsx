import React from 'react';
import { createContext } from 'react';
const defaultValue = { theme: 'light', toggleTheme: (val: string) => {} };
export const ThemeContext = createContext(defaultValue);

