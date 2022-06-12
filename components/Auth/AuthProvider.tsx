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
      isAuthenticated: false
    };

    this.login = this.login.bind(this);
  }

  login(email: string, password: string) {
    axios.post(`${config.apiUrl}/mytoken`, { username: email, password })
         .then((res: AxiosResponse<string>) => {
           AsyncStorage.setItem('token', res.data).catch(console.error);
           this.setState({
             token: res.data,
             isAuthenticated: true
           });
         }).catch(console.error);
  }

  render() {
    return (
        <AuthContext.Provider
            value={{
              user: this.state.user,
              token: this.state.token,
              isAuthenticated: this.state.isAuthenticated,
              login: this.login
            }}
        >
          {this.props.children}
        </AuthContext.Provider>
    );
  }
}
