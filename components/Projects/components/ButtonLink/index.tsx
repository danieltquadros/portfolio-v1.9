// React
import { ReactNode } from 'react';
import Link from 'next/link';

// Styles
import { ButtonLinkContainer, BottomBarLink, ButtonLinkArea } from './styles';

const ButtonLink = () => {
  return (
    <ButtonLinkContainer>
      <ButtonLinkArea>
        <Link href="https://github.com/elisiane-quadros/postFeeds">
          Ver Repositório
        </Link>
        <BottomBarLink />
      </ButtonLinkArea>

      <ButtonLinkArea>
        <Link href="https://portfolio-v1-9.vercel.app/" target="_blank">
          Ver Projeto
        </Link>
        <BottomBarLink />
      </ButtonLinkArea>
    </ButtonLinkContainer>
  );
};

export default ButtonLink;
