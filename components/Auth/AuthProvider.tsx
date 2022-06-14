import { Component } from 'react';
import User, { NullUser } from '../../model/User';
import ApiStorageService from '../../services/ApiStorageService';
import LocalStorageService from '../../services/LocalStorageService';
import UserService from '../../services/UserService';
import AuthContext from './AuthContext';

type AuthProviderState = {
  user: User;
  token: string;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export default class AuthProvider extends Component<any, AuthProviderState> {

  private readonly userService = new UserService();
  private readonly apiStorageService = new ApiStorageService();
  private readonly localStorageService = new LocalStorageService();

  constructor(props: any) {
    super(props);

    this.state = {
      user: new NullUser(),
      token: '',
      isAuthenticated: false,
      isLoading: true
    };

    this.login = this.login.bind(this);
    this.refreshState = this.refreshState.bind(this);
  }

  async componentDidMount() {
    await this.verifyAuthentication();
    this.setState({ isLoading: false });
  }

  async login(email: string, password: string) {
    const token = await this.userService.login({ username: email, password });
    await this.setAuthentication(token);
  }

  async refreshState() {
    await this.verifyAuthentication();
  }

  render() {
    return (
        <AuthContext.Provider
            value={{
              user: this.state.user,
              token: this.state.token,
              isAuthenticated: this.state.isAuthenticated,
              isLoading: this.state.isLoading,
              login: this.login,
              refreshState: this.refreshState
            }}
        >
          {this.props.children}
        </AuthContext.Provider>
    );
  }

  private async verifyAuthentication() {
    const token = await this.localStorageService.get('token');
    token && await this.setAuthentication(token);
  }

  private async setAuthentication(token: string) {
    const user = await this.userService.getCurrentUser();
    const picture64FromApi = await this.apiStorageService.getPicture64(user.picture);

    this.setState({
      token,
      isAuthenticated: true,
      user: { ...user, picture64FromApi: picture64FromApi }
    });
  }
}
