// React
import React from 'react';

// Global components
import PageContainer from '../PageContainer';

// Local components

import ServiceCard, { ServiceProps } from './components/ServiceCard';
import { ServiceContainer } from './styled';

const Services = () => {
  const serviceList: ServiceProps[] = [
    {
      id: '1',
      title: 'Sites Institucionais',
      description:
        'Criação de sites profissionais para empresas e instituições, destacando seus serviços e informações.',
    },
    {
      id: '2',
      title: 'E-commerce',
      description:
        'Construção de lojas virtuais completas, com integração de sistemas de pagamento e logística.',
    },
    {
      id: '3',
      title: 'Aplicações Web',
      description:
        'Desenvolvimento de sistemas web personalizados, como CRMs, ERPs e dashboards.',
    },
    {
      id: '4',
      title: 'Design e Desenvolvimento Responsivo',
      description:
        'Garantia de que seu site funcione perfeitamente em todos os dispositivos e tamanhos de tela.',
    },
    {
      id: '5',
      title: 'Otimização de Sites para Motores de Busca',
      description:
        'Melhoria do posicionamento do seu site nos resultados de pesquisa para aumentar a visibilidade.',
    },
    {
      id: '6',
      title: 'Manutenção e Suporte de Sites',
      description:
        'Atualização contínua de conteúdo, correção de erros e implementação de melhorias.',
    },
  ];
  return (
    <PageContainer id="services">
      <ServiceContainer>
        {serviceList.map((srv) => {
          return <ServiceCard key={srv.id} service={srv} />;
        })}
      </ServiceContainer>
    </PageContainer>
  );
};

export default Services;
