// React
import React from 'react';

// Global components
import PageContainer from '../PageContainer';
import {
  CardArea,
  LeftPanel,
  RightPanel,
  TitleContainer,
  WelcomePageContainer,
} from './styles';
import Card, { CardContent } from '../Card';
import ButtonLarge from '../ButtonLarge';

const WelcomePage = () => {
  const cardContent: CardContent[] = [
    {
      id: '1',
      title: 'Sites Institucionais?',
      description:
        'Sites informativos que apresentam uma empresa, organização ou indivíduo. Funcionalidades: Páginas sobre a empresa, serviços, equipe, contato, blog.',
    },
    {
      id: '2',
      title: 'Aplicações Web?',
      description:
        'Software acessível via navegador que pode ter diversas funcionalidades complexas. Funcionalidades: Gerenciamento de usuários, painéis administrativos, integrações com APIs externas, e-commerce, etc.',
    },
    {
      id: '3',
      title: 'Plataformas de E-commerce?',
      // description: 'Sites voltados para a venda de produtos',
      description:
        'Sites voltados para a venda de produtos e serviços online. Funcionalidades: Carrinho de compras, pagamento online, gestão de inventário, perfil de usuário, histórico de pedidos.',
    },
    {
      id: '4',
      title: 'O que mais você precisa na Web?',
      description:
        'Blogs e Sistemas de Gerenciamento de Conteúdo (CMS), Sistemas de Gerenciamento de Relacionamento com o Cliente (CRM), Plataformas de Aprendizado Online (E-learning), Aplicações de Redes Sociais, Ferramentas de Colaboração e Gestão de Projetos, APIs e Microserviços, etc...',
    },
  ];

  const buttonList = [
    {
      id: '1',
      label: 'Sites Institucionais?',
    },
    {
      id: '2',
      label: 'Aplicações Web?',
    },
  ];

  return (
    <PageContainer id="welcome">
      <WelcomePageContainer>
        <LeftPanel>
          <TitleContainer>
            <span className="myName">Elisiane Quadros</span>
            <br />
            <span className="myPosition">Desenvolvedora Web</span>
          </TitleContainer>
        </LeftPanel>
        <RightPanel>
          <h1>O que você precisa?</h1>
          <CardArea>
            {/* <ButtonLarge /> */}
            {cardContent.map((content) => (
              <Card key={content.id} cardContent={content} />
            ))}
          </CardArea>
        </RightPanel>
      </WelcomePageContainer>
    </PageContainer>
  );
};

export default WelcomePage;
