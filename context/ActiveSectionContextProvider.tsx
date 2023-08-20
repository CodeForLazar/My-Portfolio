'use client';
import {
   useState,
   createContext,
   ReactNode,
   SetStateAction,
   Dispatch,
   useContext,
} from 'react';
import {SectionName} from '@/lib/data';

type ActiveSectionContextType = {
   activeSection: SectionName;
   lastClick: number;
   setActiveSection: Dispatch<SetStateAction<SectionName>>;
   setLastClick: Dispatch<SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType>({
   activeSection: 'Home',
   lastClick: 0,
   setActiveSection: () => null,
   setLastClick: () => null,
});

const ActiveSectionContextProvider = ({children}: {children: ReactNode}) => {
   const [activeSection, setActiveSection] = useState<SectionName>('Home');
   const [lastClick, setLastClick] = useState(0);

   return (
      <ActiveSectionContext.Provider
         value={{activeSection, lastClick, setActiveSection, setLastClick}}
      >
         {children}
      </ActiveSectionContext.Provider>
   );
};

export default ActiveSectionContextProvider;

export const useActiveSectionContext = () => {
   const {activeSection, setActiveSection, lastClick, setLastClick} =
      useContext(ActiveSectionContext);

   return {activeSection, lastClick, setActiveSection, setLastClick};
};
