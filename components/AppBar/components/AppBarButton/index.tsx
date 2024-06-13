import { ReactNode, useEffect } from 'react';

import { BottomBar, ButtonContainer, ActiveLink } from './styles';

interface AppBarButtonProps {
  children: ReactNode;
  link: string;
  activeLink: ActiveLink;
}

const AppBarButton = ({ children, link, activeLink }: AppBarButtonProps) => {
  return (
    <ButtonContainer activeLink={activeLink}>
      <a className="active" href={link}>
        {children}
      </a>
      <BottomBar activeLink={activeLink} />
    </ButtonContainer>
  );
};

export default AppBarButton;
