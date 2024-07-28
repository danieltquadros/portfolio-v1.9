// React
import React from 'react';

// Global components
import PageContainer from '../PageContainer';
import {
  CardArea,
  CardAreaTitle,
  DescriptionContainer,
  LeftPanel,
  RightPanel,
  TitleContainer,
  WelcomePageContainer,
} from './styles';
import Card, { CardContent } from '../Card';
import Button from '../Button';

const WelcomePage = () => {
  const cardContent: CardContent[] = [
    {
      id: '1',
      title: 'Desenvolvimento e Design?',
      description:
        'Desenvolvimento de Sites Institucionais, E-commerce, Landing Page Design e Desenvolvimento Responsivo',
    },
    {
      id: '2',
      title: 'Otimização e Manutenção?',
      description:
        'Otimização de Sites para Motores de Busca (SEO) Manutenção e Suporte de Sites',
    },
    {
      id: '3',
      title: 'Integração e Consultoria?',
      description:
        'Integração com APIs e Serviços Externos Consultoria em Usabilidade e Experiência do Usuário (UI/UX).',
    },
    {
      id: '4',
      title: 'O que mais você precisa na Web?',
      description:
        'Tem alguma ideia ou necessidade específica? Vamos conversar e encontrar a melhor solução para você!',
    },
  ];

  return (
    <PageContainer id="welcome">
      <WelcomePageContainer>
        <LeftPanel>
          <TitleContainer>
            <h1 className="myName">Elisiane Quadros</h1>
            <h1 className="myPosition">Web Developer_</h1>
          </TitleContainer>
          <DescriptionContainer>
            <p>
              Impulsione o seu negócio, contando com soluções escaláveis e
              personalizadas para potencializar a qualidade do seu sistema. 
            </p>
            <p>
              Desenvolva os seus produtos digitais com alta qualidade de forma
              rápida e inteligente.
            </p>
          </DescriptionContainer>
          <Button>Entre em contato</Button>
        </LeftPanel>
        <RightPanel>
          <CardAreaTitle>
            <h1>O que você precisa?</h1>
          </CardAreaTitle>

          <CardArea>
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
