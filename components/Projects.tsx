'use client';
import {Fragment} from 'react';
import SectionHeading from './SectionHeading';
import Project from './Project';
import {projectsData} from '@/lib/data';
import {useSectionInView} from '@/lib/hooks';

const Projects = () => {
   const {ref} = useSectionInView('Projects');

   return (
      <section id='projects' ref={ref} className='mb-28 scroll-my-28'>
         <SectionHeading>My projects</SectionHeading>
         <div>
            {projectsData.map((project, idx) => (
               <Fragment key={idx}>
                  <Project {...project} />
               </Fragment>
            ))}
         </div>
      </section>
   );
};

export default Projects;
