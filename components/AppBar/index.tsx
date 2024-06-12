import AppBarButton from './components/AppBarButton';
import { AppBarContainer, MainMenu } from './styles';

const AppBar = () => {
  return (
    <AppBarContainer>
      <div style={{ width: '50px', height: '50px', background: '#CCC' }} />
      <MainMenu>
        <AppBarButton link="/#welcome">Home</AppBarButton>
        <AppBarButton link="/#about">About</AppBarButton>
        <AppBarButton link="/#projects">Projects</AppBarButton>
        <AppBarButton link="/#welcome">Services</AppBarButton>
        <AppBarButton link="/#welcome">Contact</AppBarButton>
      </MainMenu>
    </AppBarContainer>
  );
};

export default AppBar;
