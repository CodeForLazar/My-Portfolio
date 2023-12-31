import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import Header from '@/components/Header';
import ActiveSectionContextProvider from '@/context/ActiveSectionContextProvider';
import {Toaster} from 'react-hot-toast';
import Footer from '@/components/Footer';
import ThemeSwitch from '@/components/ThemeSwitch';
import ThemeContextProvider from '@/context/ThemeContextProvider';

const inter = Inter({
   subsets: ['latin'],
});

export const metadata: Metadata = {
   title: 'Lazar Kiridjievski | Personal Portfolio',
   description: 'Personal portfolio page.',
   openGraph: {
      title: 'Lazar Kiridjievski | Personal Portfolio',
      description: 'The React Framework for the Web',
      type: 'website',
      images: {url: 'https://www.lakxon.com/thum.png'},
   },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
   return (
      <html lang='en' className='!scroll-smooth'>
         <body
            className={`${inter.className} relative bg-gray-50 pt-28 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
         >
            <div className='absolute right-[11rem] top-[-6rem] -z-10  h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]'></div>
            <div className='absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
            <ThemeContextProvider>
               <ActiveSectionContextProvider>
                  <Header />
                  {children}
                  <Footer />
                  <Toaster position='top-right' />
                  <ThemeSwitch />
               </ActiveSectionContextProvider>
            </ThemeContextProvider>
         </body>
      </html>
   );
}
