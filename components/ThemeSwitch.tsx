'use client';

import {useTheme} from '@/context/ThemeContextProvider';
import React from 'react';
import {BsMoon, BsSun} from 'react-icons/bs';

export default function ThemeSwitch() {
   const {theme, toggleTheme} = useTheme();

   return (
      <button
         className='fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white border-opacity-40 bg-black bg-opacity-80 text-gray-200 shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:bg-white dark:text-black'
         onClick={toggleTheme}
      >
         {theme === 'light' ? <BsMoon /> : <BsSun />}
      </button>
   );
}
