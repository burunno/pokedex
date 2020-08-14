import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<IProps> = ({ name, icon: Icon, ...rest }) => {
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, error, registerField } = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputBlur = useCallback(() => {
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      <input onBlur={handleInputBlur} ref={inputRef} {...rest} />
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#f8512d" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
