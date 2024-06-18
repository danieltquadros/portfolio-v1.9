// Next
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Logo
import logo from '@/public/logo.png';

// Global hooks
import useBreakpoints from '@/hooks/useBreakpoints';

// Local components
import { LinkType } from '../..';
import AppBarButton from '../AppBarButton';
import { ActiveLink } from '../AppBarButton/styles';

// Styles
import { AppBarContainer, LogoContainer, MainMenu } from './styles';

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
