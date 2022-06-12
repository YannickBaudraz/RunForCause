export default interface AuthProps {
  user: any;
  token: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => void;
}
