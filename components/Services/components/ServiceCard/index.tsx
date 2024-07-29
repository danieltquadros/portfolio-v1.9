import { useRouter } from 'next/navigation';

import {
  HiddenContainer,
  ServiceArea,
  ServiceCardButton,
  ServiceCardContainer,
  ServiceTab,
} from './styled';
import { ReactNode } from 'react';

export interface ServiceProps {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

interface ServiceCardProps {
  service: ServiceProps;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const router = useRouter();

  return (
    <>
      <ServiceCardContainer>
        <ServiceTab>{service.icon}</ServiceTab>
        <ServiceArea>
          <h2>{service.title}</h2>
          <HiddenContainer>
            <p>{service.description}</p>
            <ServiceCardButton onClick={() => router.push('/#contact')}>
              Mais informações
            </ServiceCardButton>
          </HiddenContainer>
        </ServiceArea>
      </ServiceCardContainer>
    </>
  );
};

export default ServiceCard;
