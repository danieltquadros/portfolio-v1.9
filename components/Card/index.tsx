import { useState } from 'react';
import { CardContainer } from './styled';

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
    <CardContainer onClick={handleOpenDescription}>
      <h2>{cardContent.title}</h2>
      <div>
        <p>{cardContent.description}</p>
      </div>
    </CardContainer>
  );
};

export default Card;
