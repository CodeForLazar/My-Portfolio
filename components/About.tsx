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
            focus on <span className='underline'>front-end</span>{' '}
            development, I bring a unique{' '}
            <i>blend of creativity and technical expertise</i> to every project.
            I'm driven by the phrase{' '}
            <span className='font-medium'>“Less is more”</span>. and I strive to
            engineer my apps and write my code in that manner. I'm driven by a
            commitment to continuous learning and staying current with the
            latest industry trends and best practices. Whether I'm collaborating
            with a team or working independently, I aim to create{' '}
            <span className='underline'>high-quality</span>, scalable solutions
            that meet both user and business needs.
         </p>
      </motion.section>
   );
};

export default About;
