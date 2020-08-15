import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: #28282e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  img {
    height: 70px;
  }

  button {
    margin-left: auto;
    color: #f8512d;
    display: flex;
    background: transparent;
    border: 0;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;

  strong {
    color: #f8512d;
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  padding: 10px;
  position: absolute;
  top: 20%;

  button {
    background: transparent;
    border: 0;

    svg {
      margin-right: 10px;
      color: #f8512d;
    }

    &:hover {
      color: ${darken(0.2, '#f8512d')};
    }
  }

  input {
    width: 100%;
    outline: none;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #b1b1b1;
    }
  }
`;

export const Body = styled.div`
  display: flex;
  width: 95%;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  bottom: 5%;
`;
