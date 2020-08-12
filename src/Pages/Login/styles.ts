import styled from 'styled-components';
import { shade } from 'polished';

import charizardLogo from '../../assets/images/charizard.svg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  width: 100%;
  max-width: 900px;

  img {
    width: 100px;
    height: 100px;
  }

  form {
    margin: 88px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }

  > a {
    color: #f8512d;
    display: flex;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    svg {
      margin-right: 15px;
    }

    &:hover {
      color: ${shade(0.2, '#F8512D')};
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;

  div {
    align-items: center;
    justify-content: center;
    display: flex;

    h1 {
      margin-left: 20px;
    }
  }
`;

export const Divider = styled.div`
  width: 1px;
  background: #f4ede8;
  margin-top: 100px;
  margin-bottom: 150px;
`;

export const ImageLogin = styled.div`
  flex: 1;
  margin-bottom: 150px;
  background: url(${charizardLogo}) no-repeat center;
`;
