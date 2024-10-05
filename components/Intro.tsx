'use client';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';
import CVPic from '@/public/CVPic.jpeg';
import {BsArrowRight, BsLinkedin} from 'react-icons/bs';
import {HiDownload} from 'react-icons/hi';
import {FaGithubSquare} from 'react-icons/fa';
import {useSectionInView} from '@/lib/hooks';
import {useActiveSectionContext} from '@/context/ActiveSectionContextProvider';

const Intro = () => {
   const {ref} = useSectionInView('Home', 0.5);

   const {setActiveSection, setLastClick} = useActiveSectionContext();

   const onClick = () => {
      setActiveSection('Contact');
      setLastClick(Date.now());
   };

   return (
      <section
         id='home'
         ref={ref}
         className='mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0'
      >
         <div className='flex items-center justify-center'>
            <div className='relative'>
               <motion.div
                  initial={{opacity: 0, scale: 0}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{
                     type: 'tween',
                     duration: 0.2,
                  }}
               >
                  <Image
                     src={CVPic}
                     alt='Profile picture'
                     quality={85}
                     priority
                     width={100}
                     height={100}
                     className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover object-[50%_-10px] shadow-xl'
                  />
               </motion.div>
               <motion.span
                  className='absolute bottom-0 right-0 text-4xl'
                  initial={{opacity: 0, scale: 0}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{
                     type: 'spring',
                     stiffness: 125,
                     delay: 0.1,
                     duration: 0.7,
                  }}
               >
                  👋
               </motion.span>
            </div>
         </div>

         <motion.h1
            className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
         >
            <strong>Hi, I'm Lazar.</strong> I'm a{' '}
            <strong>full-stack developer</strong> with an{' '}
            <strong>affinity</strong> for programming. I enjoy building{' '}
            <i className='italic'>sites & apps</i>. My focus is{' '}
            <span className='underline'>React (Next.js)</span>.
         </motion.h1>

         <motion.div
            className='flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row'
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{
               delay: 0.1,
            }}
         >
            <Link
               href='#contact'
               className='group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105'
               onClick={onClick}
            >
               Contact me here{' '}
               <BsArrowRight className='opacity-70 transition group-hover:translate-x-1' />
            </Link>
            <a
               className='borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10'
               href='/CV.pdf'
               target='_blank'
            >
               Download CV{' '}
               <HiDownload className='opacity-60 transition group-hover:translate-y-1' />
            </a>
            <a
               className='borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-gray-700 transition hover:scale-[1.15]  hover:text-blue-500 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60 dark:hover:text-blue-500'
               href='https://www.linkedin.com/in/lazar-kiridjievski-465732216/'
               target='_blank'
            >
               <BsLinkedin />
            </a>
            <a
               className='borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10  dark:text-white/60 dark:hover:text-gray-900'
               href='https://github.com/CodeForLazar'
               target='_blank'
            >
               <FaGithubSquare />
            </a>
         </motion.div>
      </section>
   );
};

export default Intro;
