import { LinkType } from '../..';
import AppBarButton from '../AppBarButton';
import { ActiveLink } from '../AppBarButton/styles';
import { AppBarContainer, LogoTemp, MainMenu } from './styles';

interface AppBarDefaultProps {
  activeLink: ActiveLink[];
  linkList: LinkType[];
}

const AppBarDefault = ({ activeLink, linkList }: AppBarDefaultProps) => {
  return (
    <AppBarContainer>
      <LogoTemp />
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
