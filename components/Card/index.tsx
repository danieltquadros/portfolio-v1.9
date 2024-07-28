import { useState } from 'react';
import { CardContainer, DescriptionContainer, TitleContainer } from './styled';

export interface CardContent {
  id: string;
  title: string;
  description: string;
}

interface CardProps {
  cardContent: CardContent;
}

const Card = ({ cardContent }: CardProps) => {
  const [openDescription, setOpenDescription] = useState(false);

  const handleOpenDescription = () => {
    setOpenDescription(!openDescription);
  };

  return (
    <CardContainer>
      <TitleContainer>
        <h2>{cardContent.title}</h2>
      </TitleContainer>
      <DescriptionContainer>
        <p>{cardContent.description}</p>
      </DescriptionContainer>
    </CardContainer>
  );
};

export default Card;
