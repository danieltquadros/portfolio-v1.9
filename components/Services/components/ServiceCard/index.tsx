import { ServiceCardContainer } from './styled';

export interface ServiceProps {
  id: string;
  title: string;
  description: string;
}

interface ServiceCardProps {
  service: ServiceProps;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <ServiceCardContainer>
      <h1>{service.title}</h1>
    </ServiceCardContainer>
  );
};

export default ServiceCard;
