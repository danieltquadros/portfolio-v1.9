'use client';

// Themes and Theme provider
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@/styles/themes/default';

// Global components
import AppBar from '@/components/AppBar';
import WelcomePage from '@/components/WelcomePage';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
// import SocialMenu from '@/components/SocialMenu';
// import NavigationMenu from '@/components/NavigationMenu';

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
