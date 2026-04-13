'use client';
import SectionHeading from './SectionHeading';
import {motion} from 'framer-motion';
import {useSectionInView} from '@/lib/hooks';

const About = () => {
   const {ref} = useSectionInView('About');
   return (
      <motion.section
         className='mb-28 max-w-[45rem] scroll-my-28 text-center leading-8 sm:mb-40'
         initial={{opacity: 0, y: 100}}
         animate={{opacity: 1, y: 0}}
         transition={{delay: 0.175}}
         id='about'
         ref={ref}
      >
         <SectionHeading>About me</SectionHeading>
         <p className='mb-3'>
            As a passionate{' '}
            <span className='font-medium'>Full-Stack Developer</span> with a
            strong focus on <span className='underline'>front-end</span>{' '}
            development, I bring a unique{' '}
            <i>blend of creativity and technical expertise</i> to every project.
            I specialize in building scalable microservices and secure backend
            systems using Node.js, TypeScript, and Express, while crafting
            intuitive, high-performance user interfaces with React. Driven by
            the phrase <span className='font-medium'>“Less is more”</span>, I
            strive to write clean, efficient, and maintainable code. My goal is
            to deliver <span className='underline'>high-quality</span>, scalable
            solutions that meet both user and business needs.
         </p>
      </motion.section>
   );
};

export default About;
