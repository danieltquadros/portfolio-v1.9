import AppBarButton from './components/AppBarButton';
import { AppBarContainer, MainMenu } from './styles';

const AppBar = () => {
  return (
    <AppBarContainer>
      <div style={{ width: '50px', height: '50px', background: '#CCC' }} />
      <MainMenu>
        <AppBarButton link="/#welcome">Início</AppBarButton>
        <AppBarButton link="/#welcome">Serviços</AppBarButton>
        <AppBarButton link="/#projects">Projetos</AppBarButton>
        <AppBarButton link="/#about">Sobre</AppBarButton>
        <AppBarButton link="/#welcome">Contatos</AppBarButton>
      </MainMenu>
    </AppBarContainer>
  );
};

export default AppBar;
