// React
import React from 'react';

import Icon from '@mdi/react';
import {
  mdiAccountWrenchOutline,
  mdiCartOutline,
  mdiOfficeBuildingMarker,
  mdiResponsive,
  mdiSearchWeb,
  mdiWeb,
} from '@mdi/js';

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
      icon: <Icon path={mdiOfficeBuildingMarker} size={2} />,
    },
    {
      id: '2',
      title: 'E-commerce',
      description:
        'Construção de lojas virtuais completas, com integração de sistemas de pagamento e logística.',
      icon: <Icon path={mdiCartOutline} size={2} />,
    },
    {
      id: '3',
      title: 'Aplicações Web',
      description:
        'Desenvolvimento de sistemas web personalizados, como CRMs, ERPs e dashboards.',
      icon: <Icon path={mdiWeb} size={2} />,
    },
    {
      id: '4',
      title: 'Design e Responsividade',
      description:
        'Garantia de que seu site funcione perfeitamente em todos os dispositivos e tamanhos de tela.',
      icon: <Icon path={mdiResponsive} size={2} />,
    },
    {
      id: '5',
      title: 'SEO',
      description:
        'Melhoria do posicionamento do seu site nos resultados de pesquisa para aumentar a visibilidade.',
      icon: <Icon path={mdiSearchWeb} size={2} />,
    },
    {
      id: '6',
      title: 'Manutenção e Suporte',
      description:
        'Atualização contínua de conteúdo, correção de erros e implementação de melhorias.',
      icon: <Icon path={mdiAccountWrenchOutline} size={2} />,
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
