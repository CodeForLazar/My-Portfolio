'use client';
import SectionHeading from './SectionHeading';
import {motion} from 'framer-motion';
import {useSectionInView} from '@/lib/hooks';
import {sendMail} from '@/actions/sendMail';
import SubmitButton from './SubmitButton';
import toast from 'react-hot-toast';

const Contact = () => {
   const {ref} = useSectionInView('Contact');

   return (
      <motion.section
         id='contact'
         ref={ref}
         className='mb-20 w-[min(100%,38rem)] text-center sm:mb-28'
         initial={{opacity: 0}}
         whileInView={{opacity: 1}}
         transition={{duration: 1}}
         viewport={{once: true}}
      >
         <SectionHeading>Contact Me</SectionHeading>
         <p className='-mt-6 text-gray-700 dark:text-white/80'>
            Please contact me directly at{' '}
            <a className='underline' href='mailto:l.kiridzievski@gmail.dev'>
               l.kiridzievski@gmail.com
            </a>{' '}
            or through this form.
         </p>
         <form
            action={async (formData) => {
               const {data, error} = await sendMail(formData);

               if (error) {
                  toast.error(error);
                  return;
               }
               toast.success('Email sent successfully!');
            }}
            className='mt-10 flex flex-col dark:text-black'
         >
            <input
               type='email'
               name='email'
               required
               maxLength={500}
               placeholder='Your email'
               className='borderBlack h-14 rounded-lg px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100'
            />
            <textarea
               className='borderBlack my-3 h-52 rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100'
               placeholder='Your message'
               required
               name='message'
               maxLength={5000}
            ></textarea>
            <SubmitButton />
         </form>
      </motion.section>
   );
};

export default Contact;
