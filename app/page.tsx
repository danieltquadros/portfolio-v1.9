'use client';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@/styles/themes/default';

import styles from './page.module.css';
import AppBar from '@/components/AppBar';
import WelcomePage from '@/components/WelcomePage';
import About from '@/components/About';

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <main className={styles.main}>
        <AppBar />
        <WelcomePage />
        <About />
      </main>
    </ThemeProvider>
  );
}
