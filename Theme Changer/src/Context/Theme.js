import {react, createContext, useContext} from 'react';
const ThemeContext = createContext(
    {
        theme:'light',
        darkTheme:()=>{},
        lightTheme:()=>{}
    }
);

export const ThemeProvider = ThemeContext.Provider;

export function useTheme(){
    return useContext(ThemeContext);
}