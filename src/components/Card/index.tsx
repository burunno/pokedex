import React from 'react';

import { Container } from './styles';

interface CardProps {
  name: string;
  type: string;
  avatar: string;
}

const Card: React.FC<CardProps> = ({ name, type, avatar }) => {
  return (
    <Container>
      <img src={avatar} alt="avatar" />
      <strong>{name}</strong>
      <span>{type}</span>
    </Container>
  );
};

export default Card;
