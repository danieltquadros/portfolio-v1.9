// React
import { ReactNode } from 'react';
import Link from 'next/link';

// Styles
import { ButtonLinkContainer, BottomBarLink, ButtonLinkArea } from './styles';

interface ButtonLinkProps {
  children: ReactNode;
  url: string;
  newTab?: boolean;
}

const ButtonLink = ({ children, url, newTab = false }: ButtonLinkProps) => {
  return (
    <ButtonLinkArea>
      <Link href={url} target={newTab ? '_blank' : '_self'}>
        {children}
      </Link>
      <BottomBarLink />
    </ButtonLinkArea>
  );
};

export default ButtonLink;
