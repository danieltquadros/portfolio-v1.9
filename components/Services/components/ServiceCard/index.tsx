import {
  HiddenContainer,
  ServiceArea,
  ServiceCardContainer,
  ServiceTab,
} from './styled';
import { ReactNode } from 'react';
import Button from '@/components/Button';

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
  return (
    <>
      <ServiceCardContainer>
        <ServiceTab>{service.icon}</ServiceTab>
        <ServiceArea>
          <h2>{service.title}</h2>
          <HiddenContainer>
            <p>{service.description}</p>
            <Button>Mais informações</Button>
          </HiddenContainer>
        </ServiceArea>
      </ServiceCardContainer>
    </>
  );
};

export default ServiceCard;
