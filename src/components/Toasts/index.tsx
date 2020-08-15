import React from 'react';

import { Container } from './styles';

import AnimationToast from './AnimationToast';
import ToastMessage from '../../interfaces/ToastsMessageProps';

interface IProps {
  messages: ToastMessage[];
}

const Toasts: React.FC<IProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <AnimationToast key={message.id} toast={message} />
      ))}
    </Container>
  );
};

export default Toasts;
