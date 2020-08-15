export interface UserProps {
  id: string;
  name: string;
}

export interface SignInProps {
  email: string;
  password: string;
}

export interface AuthState {
  token: string;
  user: UserProps;
}
