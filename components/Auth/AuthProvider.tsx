import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Component } from 'react';
import config from '../../config';
import User, { NullUser } from '../../model/User';
import AuthContext from './AuthContext';

type AuthProviderState = {
  user: User;
  token: string;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export default class AuthProvider extends Component<any, AuthProviderState> {
  constructor(props: any) {
    super(props);

    this.state = {
      user: new NullUser(),
      token: '',
      isAuthenticated: false,
      isLoading: true
    };

    this.login = this.login.bind(this);
  }

  async componentDidMount() {
    await this.verifyAuthentication();
    this.setState({ isLoading: false });
  }

  login(email: string, password: string) {
    const loginUrl = `${config.url.api}/mytoken`;
    const postData = { username: email, password };

    axios.post(loginUrl, postData)
         .then(async (res: AxiosResponse<string>) => {
           AsyncStorage.setItem('token', res.data).catch(console.error);
           await this.setAuthentication(res.data);
         }).catch(console.error);
  }

  render() {
    return (
        <AuthContext.Provider
            value={{
              user: this.state.user,
              token: this.state.token,
              isAuthenticated: this.state.isAuthenticated,
              isLoading: this.state.isLoading,
              login: this.login
            }}
        >
          {this.props.children}
        </AuthContext.Provider>
    );
  }

  private async verifyAuthentication() {
    const token = await AsyncStorage.getItem('token');
    token && await this.setAuthentication(token);
  }

  private async setAuthentication(token: string) {
    this.setState({
      token,
      isAuthenticated: true,
      user: await this.getUser(token)
    });
  }

  private async getUser(token: string = this.state.token) {
    const userUrl = `${config.url.api}/me`;
    const requestConfig: AxiosRequestConfig = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axios.get<User>(userUrl, requestConfig);

    return response.data;
  }
}
