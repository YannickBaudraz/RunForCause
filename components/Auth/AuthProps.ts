import User from '../../model/User';

export default interface AuthProps {
  user: User;
  token: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => void;
}
