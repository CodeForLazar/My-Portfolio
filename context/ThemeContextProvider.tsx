'use client';
import {ReactNode, useEffect, useState, createContext, useContext} from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
   theme: Theme;
   toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
   theme: 'light',
   toggleTheme: () => null,
});

const ThemeContextProvider = ({children}: {children: ReactNode}) => {
   const [theme, setTheme] = useState<Theme>('light');

   const toggleTheme = () => {
      setTheme((prevTheme) => {
         if (prevTheme === 'light') {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
            return 'dark';
         } else {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
            return 'light';
         }
      });
   };

   useEffect(() => {
      const localTheme = localStorage.getItem('theme') as Theme;

      if (localTheme) {
         setTheme(localTheme);

         if (localTheme === 'dark') {
            document.documentElement.classList.add('dark');
         }
      } else if (matchMedia('(prefers-color-scheme: dark)').matches) {
         setTheme('dark');
         document.documentElement.classList.add('dark');
      }
   }, []);

   return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>
         {children}
      </ThemeContext.Provider>
   );
};

export default ThemeContextProvider;

export const useTheme = () => {
   const {theme, toggleTheme} = useContext(ThemeContext);

   return {theme, toggleTheme};
};
