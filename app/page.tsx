'use client';

import dynamic from 'next/dynamic';

// Themes and Theme provider
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@/styles/themes/default';

// Global components
const AppBar = dynamic(() => import('@/components/AppBar'), { ssr: false });
const WelcomePage = dynamic(() => import('@/components/WelcomePage'), {
  ssr: false,
});
const Services = dynamic(() => import('@/components/Services'), { ssr: false });
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false });
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false });
const About = dynamic(() => import('@/components/About'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });

import styles from './page.module.css';

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <main className={styles.main}>
        <AppBar />
        {/* <SocialMenu />
        <NavigationMenu /> */}
        <WelcomePage />
        <Services />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
    </ThemeProvider>
  );
}
