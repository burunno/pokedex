import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Container, Content, Header, ImageLogin, Divider } from './styles';

import pokeballLogo from '../../assets/images/pokeball.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header>
          <img src={pokeballLogo} alt="pokeball" />
          <div>
            <h1>POKEDEX</h1>
          </div>
        </Header>

        <form>
          <h1>Login</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input name="email" icon={FiLock} placeholder="Senha" />

          <Button type="submit">Entrar</Button>
        </form>

        <a href="">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>
      <Divider />
      <ImageLogin />
    </Container>
  );
};

export default Login;
