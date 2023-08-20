import {createElement} from 'react';
import {CgWorkAlt} from 'react-icons/cg';
import {FaReact} from 'react-icons/fa';
import {LuGraduationCap} from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
   {
      name: 'Home',
      hash: '#home',
   },
   {
      name: 'About',
      hash: '#about',
   },
   {
      name: 'Projects',
      hash: '#projects',
   },
   {
      name: 'Skills',
      hash: '#skills',
   },
   {
      name: 'Experience',
      hash: '#experience',
   },
   {
      name: 'Contact',
      hash: '#contact',
   },
] as const;
export type SectionName = (typeof links)[number]['name'];

export const experiencesData = [
   {
      title: 'Sales & Business development',
      location: 'Evgeni - Skopje',
      description:
         'Represent companies and promote their varieties on a national level, Implementing effective marketing strategies, Increase sales and grow the customer base. ',
      icon: createElement(CgWorkAlt),
      date: '2016 - 2022',
   },
   {
      title: 'Graduated Academy',
      location: 'Semos Computer Education Center - Skopje',
      description:
         'I graduated after 9 months of studying. I immediately found a job as a full-stack developer.',
      icon: createElement(LuGraduationCap),
      date: '2021 - 2022',
   },
   {
      title: 'full-stack Developer',
      location: 'Sourcico - Skopje/Tel Aviv',
      description:
         'I am currently working for Perion a  technology company that provides digital advertising products and services.',
      icon: createElement(FaReact),
      date: '2022 - Present',
   },
] as const;

export const projectsData = [
   {
      title: 'Coming Soon...',
      description:
         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis sequi cupiditate maiores aliquam non, omnis ducimus nihil nesciunt molestias praesentium.',
      tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
      imageUrl: corpcommentImg,
   },
   {
      title: 'Coming Soon...',
      description:
         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis sequi cupiditate maiores aliquam non, omnis ducimus nihil nesciunt molestias.',
      tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
      imageUrl: rmtdevImg,
   },
   {
      title: 'Coming Soon... Analytics',
      description:
         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis sequi cupiditate maiores aliquam non, omnis ducimus nihil nesciunt.',
      tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
      imageUrl: wordanalyticsImg,
   },
] as const;

export const skillsData = [
   'HTML',
   'CSS',
   'SASS',
   'Tailwind',
   'JavaScript',
   'TypeScript',
   'React',
   'Next.js',
   'Node.js',
   'Git',
   'PostgreSQL',
   'MySQL',
   'MongoDB',
   'Prisma',
   'Sequelize',
   'Mongoose',
   'Redux',
   'Framer Motion',
   'TanStack Table',
   'Moment.js',
] as const;
