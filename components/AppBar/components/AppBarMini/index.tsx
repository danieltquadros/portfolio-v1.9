// React and Next
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Logo
import logo from '@/public/logo.png';

// Types and interfaces
import { LinkType } from '../..';

// Local components
import AppBarButton from '../AppBarButton';
import { ActiveLink } from '../AppBarButton/styles';
import { LogoContainer } from '../AppBarDefault/styles';

// Styles
import {
  AppBarMiniContainer,
  Container,
  MenuBar,
  MenuIcon,
  MiniAppBar,
  MiniMenuContainer,
  NavContainer,
} from './styles';

interface AppBarMiniProps {
  linkList: LinkType[];
  activeLink: ActiveLink[];
}

const AppBarMini = ({ linkList, activeLink }: AppBarMiniProps) => {
  const router = useRouter();

  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <AppBarMiniContainer>
      <Container opened={openMenu} onClick={handleOpenMenu} />
      <div style={{ display: 'flex' }}>
        <MiniAppBar opened={openMenu}>
          <LogoContainer onClick={() => router.push('/#welcome')}>
            <Image src={logo} height={50} alt="" />
          </LogoContainer>
        </MiniAppBar>
        <MiniMenuContainer
          opened={openMenu}
          className={openMenu ? 'opened' : ''}
        >
          <NavContainer>
            {openMenu &&
              linkList.map((lk: LinkType, index: number) => {
                return (
                  <AppBarButton
                    key={lk.link}
                    link={lk.link}
                    activeLink={activeLink[index]}
                    handleOpenMenu={handleOpenMenu}
                  >
                    {lk.label}
                  </AppBarButton>
                );
              })}
          </NavContainer>
          <MenuIcon onClick={handleOpenMenu}>
            <MenuBar opened={openMenu} className={openMenu ? 'barOne' : ''} />
            <MenuBar opened={openMenu} className={openMenu ? 'barTwo' : ''} />
            <MenuBar opened={openMenu} className={openMenu ? 'barThree' : ''} />
          </MenuIcon>
        </MiniMenuContainer>
      </div>
    </AppBarMiniContainer>
  );
};

export default AppBarMini;
