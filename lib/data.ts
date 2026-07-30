import {createElement} from 'react';
import {FaNodeJs} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';
import chatBot from '@/public/chatBot.png';
import ssiPlatform from '@/public/ssiPlatform.jpg';
import issuerDashboard from '@/public/issuerDashboard.jpg';
import enterprisePlatform from '@/public/enterprisePlatform.jpg';
import adtechPlatform from '@/public/adtechPlatform.jpg';

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
      title: 'Software Developer',
      location: 'Semansys Technologies - Netherlands',
      description:
         'Designing and building a decentralized Self-Sovereign Identity (SSI) platform for issuing and verifying verifiable credentials, with secure Node.js/TypeScript backend services and a customized React Native wallet.',
      icon: createElement(FaNodeJs),
      date: 'Jan 2025 - Present',
   },
   {
      title: 'Frontend Web Developer',
      location: 'Dalmore Group - USA',
      description:
         'Owned the frontend architecture for a production platform, converting Figma designs into pixel-perfect, reusable React components while integrating multiple API endpoints under strict delivery timelines.',
      icon: createElement(FaReact),
      date: 'Sep 2024 - Feb 2025',
   },
   {
      title: 'Frontend Web Developer',
      location: 'Enterprise League - Remote',
      description:
         'Improved SEO and frontend performance, built modular reusable components with modern best practices, and integrated APIs for reliable frontend-backend data flow.',
      icon: createElement(FaReact),
      date: 'Sep 2024 - Dec 2024',
   },
   {
      title: 'Full Stack Developer',
      location: 'Perion (via Sourcico) - Skopje, North Macedonia',
      description:
         'Developed and maintained enterprise-scale React and Node.js applications for high-traffic advertising platforms, building REST APIs with Express and resolving production performance issues.',
      icon: createElement(FaNodeJs),
      date: 'Jun 2022 - Aug 2024',
   },
] as const;

export const projectsData = [
   {
      title: 'ChatBot',
      description:
         'OpenAi chatbot that offers customer support into websites and provides a personalized and interactive communication channel.',
      tags: ['React', 'Next.js', 'Tailwind', 'TypeScript', 'Zod'],
      imageUrl: chatBot,
   },
   {
      title: 'SSI Credential Platform',
      description:
         'Decentralized Self-Sovereign Identity platform for issuing and verifying verifiable credentials, with a React Native wallet.',
      tags: ['Node.js', 'TypeScript', 'React', 'React Native', 'Blockchain'],
      imageUrl: ssiPlatform,
   },
   {
      title: 'Issuer Dashboard & Admin Panel',
      description:
         'Internal web app for managing verifiable credential issuance, built with a component-driven React architecture.',
      tags: ['React', 'TypeScript', 'Node.js', 'REST API'],
      imageUrl: issuerDashboard,
   },
   {
      title: 'Enterprise Web Platform',
      description:
         'Production platform built from Figma designs into pixel-perfect, reusable React components with multiple API integrations.',
      tags: ['React', 'TypeScript', 'REST API', 'Figma to Code'],
      imageUrl: adtechPlatform,
   },
   {
      title: 'Ad-Tech Platform Services',
      description:
         'Enterprise-scale React and Node.js applications serving high-traffic advertising platforms, with Express-based REST APIs.',
      tags: ['React', 'Node.js', 'Express', 'REST API', 'TypeScript'],
      imageUrl: enterprisePlatform,
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
