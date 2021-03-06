import styled, { css } from 'styled-components';

interface TooltipProps {
  type: string;
}

export const Container = styled.div<TooltipProps>`
  position: relative;

  ${props =>
    props.type === 'error' &&
    css`
      span {
        width: 160px;
        background: #f8512d;
        padding: 8px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        opacity: 0;
        transition: opacity 0.4s;
        visibility: hidden;

        position: absolute;
        bottom: calc(100% + 12px);
        left: 50%;
        transform: translateX(-50%);

        &::before {
          content: '';
          border-style: solid;
          border-color: #f8512d transparent;
          border-width: 6px 6px 0 6px;
          top: 100%;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
      }

      &:hover span {
        opacity: 1;
        visibility: visible;
      }
    `}

  ${props => props.type === 'pokemonCard' && css``}
`;
