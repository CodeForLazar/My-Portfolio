import {useActiveSectionContext} from '@/context/ActiveSectionContextProvider';
import {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import type {SectionName} from './data';

export const useSectionInView = (
   sectionName: SectionName,
   threshold = 0.75,
) => {
   const {ref, inView} = useInView({
      threshold,
   });
   const {setActiveSection, lastClick} = useActiveSectionContext();

   useEffect(() => {
      if (inView && Date.now() - lastClick > 1000) {
         setActiveSection(sectionName);
      }
   }, [inView, setActiveSection, lastClick, sectionName]);

   return {ref};
};
