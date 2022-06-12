export default interface AuthProps {
  user: any;
  token: string;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
}
