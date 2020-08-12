import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type IProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IProps> = ({ children, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
