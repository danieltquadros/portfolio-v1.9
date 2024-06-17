import { useState } from 'react';

import useBreakpoints from '@/hooks/useBreakpoints';

import { LinkType } from '../..';

import {
  AppBarMiniContainer,
  Container,
  MenuBar,
  MenuIcon,
  MiniAppBar,
  MiniMenuContainer,
  NavContainer,
} from './styles';
import AppBarButton from '../AppBarButton';
import { ActiveLink } from '../AppBarButton/styles';
import { LogoTemp } from '../AppBarDefault/styles';

interface AppBarMiniProps {
  linkList: LinkType[];
  activeLink: ActiveLink[];
}

const AppBarMini = ({ linkList, activeLink }: AppBarMiniProps) => {
  const { isSm } = useBreakpoints();

  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <AppBarMiniContainer>
      <Container opened={openMenu} onClick={handleOpenMenu} />
      <div style={{ display: 'flex' }}>
        <MiniAppBar opened={openMenu}>
          <LogoTemp />
        </MiniAppBar>
        <MiniMenuContainer opened={openMenu}>
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
            <MenuBar />
            <MenuBar />
            <MenuBar />
          </MenuIcon>
        </MiniMenuContainer>
        {/* {isSm.only && openMenu && (
          <div
            style={{
              background: '0F0',
              width: 'calc(100vw - 300px',
              height: '100vh',
            }}
          />
        )} */}
      </div>
    </AppBarMiniContainer>
  );
};

export default AppBarMini;
