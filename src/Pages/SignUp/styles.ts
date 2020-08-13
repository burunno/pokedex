import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import pokemonsImage from '../../assets/images/pokemons.jpg';

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

  width: 50%;
  max-width: 900px;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  animation: ${appearFromRight} 1s;

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
      font-family: Montserrat, sans-serif;
    }
  }

  > a {
    color: #f8512d;
    display: flex;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    svg {
      margin-right: 8px;
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
      font-family: Montserrat, sans-serif;
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
  align-items: center;
  border-top-right-radius: 50%;
  background: url(${pokemonsImage}) no-repeat center;
  background-size: cover;
`;
