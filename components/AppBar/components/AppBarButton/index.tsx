import { ReactNode } from 'react';

import { BottomBar, ButtonContainer } from './styles';

interface AppBarButtonProps {
  children: ReactNode;
  link: string;
}

const AppBarButton = ({ children, link }: AppBarButtonProps) => {
  return (
    <ButtonContainer>
      <a href={link}>{children}</a>
      <BottomBar />
    </ButtonContainer>
  );
};

export default AppBarButton;
