import styled, { css } from 'styled-components';

import Tooltip from '../../components/Tooltip';

interface ContainerProps {
  isFilled: boolean;
  isErrored?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 18px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #f8512d;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #f8512d;
    `}

  input {
    flex: 1;
    outline: none;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }
`;
