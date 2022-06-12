import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosResponse } from 'axios';
import { Component } from 'react';
import config from '../../config';
import AuthContext from './AuthContext';

export default class AuthProvider extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      user: {},
      token: null,
      isAuthenticated: false,
      isLoading: true
    };

    this.login = this.login.bind(this);
  }

  componentDidMount() {
    this.verifyAuthentication().catch(console.error);
  }

  login(email: string, password: string) {
    axios.post(`${config.url.api}/mytoken`, { username: email, password })
         .then((res: AxiosResponse<string>) => {
           AsyncStorage.setItem('token', res.data).catch(console.error);
           this.setAuthentication(res.data);
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
    await AsyncStorage.getItem('token').then((token: string | null) => {
      if (token) {
        this.setAuthentication(token);
      }
    });
    this.setState({ isLoading: false });
  }

  private setAuthentication(token: string) {
    this.setState({ token, isAuthenticated: true });
  }
}
