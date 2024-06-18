// React
import { useEffect, useState } from 'react';

// Global hooks
import useBreakpoints from '@/hooks/useBreakpoints';

// Local components
import AppBarDefault from './components/AppBarDefault';
import { ActiveLink } from './components/AppBarButton/styles';
import AppBarMini from './components/AppBarMini';

export interface LinkType {
  label: string;
  link: string;
}

export const linkList: LinkType[] = [
  {
    label: 'Início',
    link: '/#welcome',
  },
  {
    label: 'Serviços',
    link: '/#services',
  },
  {
    label: 'Habilidades',
    link: '/#skills',
  },
  {
    label: 'Projetos',
    link: '/#projects',
  },
  {
    label: 'Sobre',
    link: '/#about',
  },
  {
    label: 'Contatos',
    link: '/#contact',
  },
];

const AppBar = () => {
  const { isMd } = useBreakpoints();

  const [activeLink, setActiveLink] = useState<ActiveLink[]>([
    'ACTIVE',
    'INACTIVE',
    'INACTIVE',
    'INACTIVE',
    'INACTIVE',
    'INACTIVE',
  ]);

  const updateScreenHeight = () => {
    const scrollY = window.scrollY;
    const heightScreen = window.innerHeight;

    if (scrollY < heightScreen) {
      setActiveLink([
        'ACTIVE',
        'INACTIVE',
        'INACTIVE',
        'INACTIVE',
        'INACTIVE',
        'INACTIVE',
      ]);
      return;
    }

    if (scrollY < heightScreen * 2 && scrollY >= heightScreen) {
      setActiveLink([
        'INACTIVE',
        'ACTIVE',
        'INACTIVE',
        'INACTIVE',
        'INACTIVE',
        'INACTIVE',
      ]);
      return;
    }
    if (scrollY < heightScreen * 3 && scrollY >= heightScreen * 2) {
      setActiveLink([
        'INACTIVE',
        'INACTIVE',
        'ACTIVE',
        'INACTIVE',
        'INACTIVE',
        'INACTIVE',
      ]);
      return;
    }
    if (scrollY < heightScreen * 4 && scrollY >= heightScreen * 3) {
      setActiveLink([
        'INACTIVE',
        'INACTIVE',
        'INACTIVE',
        'ACTIVE',
        'INACTIVE',
        'INACTIVE',
      ]);
      return;
    }

    if (scrollY < heightScreen * 5 && scrollY >= heightScreen * 4) {
      setActiveLink([
        'INACTIVE',
        'INACTIVE',
        'INACTIVE',
        'INACTIVE',
        'ACTIVE',
        'INACTIVE',
      ]);
      return;
    }

    if (scrollY < heightScreen * 6 && scrollY >= heightScreen * 5) {
      setActiveLink([
        'INACTIVE',
        'INACTIVE',
        'INACTIVE',
        'INACTIVE',
        'INACTIVE',
        'ACTIVE',
      ]);
      return;
    }
  };

  useEffect(() => {
    updateScreenHeight();
    window.addEventListener('scroll', updateScreenHeight);

    return () => {
      window.removeEventListener('scroll', updateScreenHeight);
    };
  }, []);

  return isMd.down ? (
    <AppBarMini linkList={linkList} activeLink={activeLink} />
  ) : (
    <AppBarDefault activeLink={activeLink} linkList={linkList} />
  );
};

export default AppBar;
