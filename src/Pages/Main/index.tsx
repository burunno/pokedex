import React, { useState } from 'react';
import { FiLogOut, FiSearch } from 'react-icons/fi';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Search,
  Body,
} from './styles';

import logo from '../../assets/images/logo.svg';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toasts';
import { PokeAPI } from '../../services/api';

import Card from '../../components/Card';
import { AnyPtrRecord } from 'dns';

interface PokeProps {
  id: number;
  name: string;
  avatar: string;
  type: string;
}

const Main: React.FC = () => {
  const [search, setSearch] = useState('');
  const [pokemons, setPokemons] = useState<PokeProps[]>([]);

  const { addToast } = useToast();

  const handleSearch = async () => {
    setSearch('');

    try {
      const response = await PokeAPI.get(`${search}`);
      const pokeType: string = response.data.types[0].type.name;

      const pokemonExists = pokemons.find(
        pokemon => pokemon.name === response.data.name,
      );

      if (pokemonExists) {
        addToast({
          type: 'error',
          title: 'Erro ao adicionar o Pokemon',
          description: 'Pokemon já adicionado',
        });

        return;
      }

      setPokemons([
        ...pokemons,
        {
          id: response.data.id,
          name: response.data.name,
          avatar: response.data.sprites.front_default,
          type: pokeType,
        },
      ]);

      addToast({
        type: 'success',
        title: 'Pokemon adicionado à sua pokedex',
      });
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Erro na busca',
        description: 'Nenhum resultado encontrado',
      });
    }
  };

  const { signOut, user } = useAuth();
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logo} alt="Pokemon logo" />
          <Profile>
            <span>Bem vindo(a)</span>
            <strong>{user.name}</strong>
          </Profile>

          <button onClick={signOut} type="button">
            <FiLogOut size={20} />
            Sair
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Search>
          <input
            value={search}
            onChange={event => setSearch(event?.target.value)}
            placeholder="Pesquise um Pokemon"
          />
          <button type="button" onClick={handleSearch}>
            <FiSearch size={20} />
          </button>
        </Search>
        <Body>
          {pokemons.map(pokemon => (
            <Card
              key={pokemon.id}
              name={pokemon.name}
              avatar={pokemon.avatar}
              type={pokemon.type}
            />
          ))}
        </Body>
      </Content>
    </Container>
  );
};

export default Main;
