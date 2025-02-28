import {createElement} from 'react';
import {CgWorkAlt} from 'react-icons/cg';
import {FaReact} from 'react-icons/fa';
import chatBot from '@/public/chatBot.png';
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
      title: 'Full-stack Developer',
      location: 'Identry - Netherlands',
      description:
         'Developing an advanced Self-Sovereign Identity (SSI) solution powered by blockchain technology.',
      icon: createElement(FaReact),
      date: '2025 - Present',
   },
   {
      title: 'Front-end Developer',
      location: 'Dalmoregroup - USA',
      description:
         'Develop a fintech client-side application for a stock investment platform.',
      icon: createElement(FaReact),
      date: '2024 - 2025',
   },
   {
      title: 'Front-end Developer',
      location: 'Enterprise League - Skopje',
      description:
         'Worked for Enterprise League a startup company that provides a B2B platform.',
      icon: createElement(FaReact),
      date: '2023 - 2024',
   },
   {
      title: 'full-stack Developer',
      location: 'Undertone (for Perion) - Tel Aviv',
      description:
         'Worked for Perion a technology company that provides digital advertising products and services.',
      icon: createElement(FaReact),
      date: '2021 - 2023',
   },
] as const;

export const projectsData = [
   {
      title: 'ChatBot',
      description:
         'OpenAi chatbot that offers customer support into websites and provides a personalized and interactive communication channel.',
      tags: ['React', 'Next.js', 'Tailwind', 'TypeScript', 'Zod'],
      imageUrl: chatBot,
      link: 'https://chat-bot-bookworm.vercel.app',
   },
   // {
   //    title: 'Coming Soon...',
   //    description:
   //       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis sequi cupiditate maiores aliquam non, omnis ducimus nihil nesciunt molestias.',
   //    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
   //    imageUrl: rmtdevImg,
   //    link: '',
   // },
   // {
   //    title: 'Coming Soon... Analytics',
   //    description:
   //       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis sequi cupiditate maiores aliquam non, omnis ducimus nihil nesciunt.',
   //    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
   //    imageUrl: wordanalyticsImg,
   //    link: '',
   // },
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
   'Sequelize',
   'Mongoose',
   'Redux',
   'Framer Motion',
   'TanStack Table',
   'TanStack Query',
   'Moment.js',
   'Date-fns.js',
] as const;
