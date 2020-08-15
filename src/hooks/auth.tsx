import React, { createContext, useCallback, useState, useContext } from 'react';
import { usersAPI } from '../services/api';

import { UserProps, SignInProps, AuthState } from '../interfaces/AuthProps';

interface IProps {
  user: UserProps;
  signIn(credentials: SignInProps): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<IProps>({} as IProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@pokedex:token');
    const user = localStorage.getItem('@pokedex:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await usersAPI.post('/session', {
      email,
      password,
    });

    const { token } = response.data;

    const {
      _id: id,
      email: user_email,
      password: user_password,
      name,
    } = response.data.user;

    const user = {
      id,
      name,
      email: user_email,
      password: user_password,
    };

    localStorage.setItem('@pokedex:token', token);
    localStorage.setItem('@pokedex:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@pokedex:token');
    localStorage.removeItem('@pokedex:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}
