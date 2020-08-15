import React from 'react';

import { Container } from './styles';

interface IProps {
  title: string;
  type: string;
  className?: string;
}

const Tooltip: React.FC<IProps> = ({ title, type, className, children }) => {
  return (
    <Container className={className} type={type}>
      <span>{title}</span>
      {children}
    </Container>
  );
};

export default Tooltip;
