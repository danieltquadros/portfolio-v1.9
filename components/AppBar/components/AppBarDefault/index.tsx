import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { LinkType } from '../..';
import AppBarButton from '../AppBarButton';
import { ActiveLink } from '../AppBarButton/styles';
import { AppBarContainer, LogoContainer, MainMenu } from './styles';

import logo from '@/public/logo.png';
import useBreakpoints from '@/hooks/useBreakpoints';

interface AppBarDefaultProps {
  activeLink: ActiveLink[];
  linkList: LinkType[];
}

const AppBarDefault = ({ activeLink, linkList }: AppBarDefaultProps) => {
  const router = useRouter();
  const { isTk } = useBreakpoints();

  return (
    <AppBarContainer>
      <LogoContainer onClick={() => router.push('/#welcome')}>
        <Image src={logo} height={isTk.up ? 80 : 50} alt="" />
      </LogoContainer>
      <MainMenu>
        {linkList.map((lk: LinkType, index: number) => {
          return (
            <AppBarButton
              key={lk.link}
              link={lk.link}
              activeLink={activeLink[index]}
            >
              {lk.label}
            </AppBarButton>
          );
        })}
      </MainMenu>
    </AppBarContainer>
  );
};

export default AppBarDefault;
