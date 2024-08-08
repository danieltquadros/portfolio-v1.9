import {
  ActionArea,
  IconContainer,
  ServiceCardContainer,
  ServiceTab,
} from './styled';
import { ReactNode } from 'react';
import ButtonLink from '@/components/ButtonLink';

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
        <ServiceTab>
          <IconContainer>{service.icon}</IconContainer>
        </ServiceTab>
        <ActionArea>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          <ButtonLink url="#contact">Mais informações</ButtonLink>
        </ActionArea>
      </ServiceCardContainer>
    </>
  );
};

export default ServiceCard;
