import { ReactNode, useEffect } from 'react';

import { BottomBar, ButtonContainer, ActiveLink } from './styles';

interface AppBarButtonProps {
  children: ReactNode;
  link: string;
  activeLink: ActiveLink;
  handleOpenMenu?: () => void;
}

const AppBarButton = ({
  children,
  link,
  activeLink,
  handleOpenMenu,
}: AppBarButtonProps) => {
  const handleOnclickButton = () => {
    if (handleOpenMenu) {
      handleOpenMenu();
    }
  };
  return (
    <ButtonContainer active_link={activeLink} onClick={handleOnclickButton}>
      <a className="active" href={link}>
        {children}
      </a>
      <BottomBar active_link={activeLink} />
    </ButtonContainer>
  );
};

export default AppBarButton;
