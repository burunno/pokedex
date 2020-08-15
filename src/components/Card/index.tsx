import React from 'react';

import { Container } from './styles';

interface CardProps {
  name: string;
  type: string;
}

const Card: React.FC<CardProps> = ({ name, type }) => {
  return (
    <Container>
      <img
        src="https://avatars3.githubusercontent.com/u/38473461?s=460&u=fff1427e55c79305b0b4dddbc2f621c8c7b841ad&v=4"
        alt="avatar"
      />
      <strong>{name}</strong>
      <span>{type}</span>
    </Container>
  );
};

export default Card;
