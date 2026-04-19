import {createElement} from 'react';
import {FaNodeJs} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';
import chatBot from '@/public/chatBot.png';

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
      location: 'Semansys Technologies - Netherlands',
      description:
         'Developing an advanced Self-Sovereign Identity (SSI) and OpenID solution powered by blockchain technology.',
      icon: createElement(FaNodeJs),
      date: '2025 - Present',
   },
   {
      title: 'Front-end Developer',
      location: 'Dalmoregroup - USA',
      description:
         'Owned the frontend architecture and implementation for a production fintech platform.',
      icon: createElement(FaReact),
      date: '2024 - 2025',
   },
   {
      title: 'Front-end Developer',
      location: 'Enterprise League - Skopje',
      description:
         'Enhance and optimize SEO performance, write clean, modular, and reusable code following best practices',
      icon: createElement(FaReact),
      date: '2023 - 2024',
   },
   {
      title: 'full-stack Developer',
      location: 'Undertone (for Perion) - Tel Aviv',
      description:
         'Developed and Maintained Enterprise Web Applications: Worked on several large-scale projects, ensuring high performance and reliability.',
      icon: createElement(FaNodeJs),
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
] as const;

export const skillsData = [
   'HTML',
   'CSS',
   'SASS',
   'TailwindCSS',
   'JavaScript',
   'TypeScript',
   'React',
   'Next.js',
   'Tenstack Start',
   'Node.js',
   'Nest.js',
   'Git',
   'PostgreSQL',
   'MySQL',
   'MongoDB',
   'Redux',
   'TanStack Tech',
   'Micro-services',
   'AWS',
] as const;
