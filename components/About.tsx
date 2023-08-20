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
            After graduating with a degree in{' '}
            <span className='font-medium'>Crop-Science</span>, and working in
            sales and business development. I decided to pursue my passion for
            programming. I enrolled in a coding academy and learned{' '}
            <span className='font-medium'>full-stack web development</span>.{' '}
            <i>My favorite part of programming</i> is the problem-solving
            aspect. I <span className='underline'>love</span> the feeling of
            finally figuring out a solution to a problem. I'm driven by the
            phrase <span className='font-medium'>“Less is more”</span>. and I
            strive to engineer my apps and write my code in that manner.
         </p>
      </motion.section>
   );
};

export default About;
