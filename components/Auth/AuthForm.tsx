import { Button } from '@rneui/base';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { AuthContext } from './index';

export default class AuthForm extends React.Component<{}, { email: string, password: string }> {
  static contextType = AuthContext;

  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  async onPress() {
    this.context.login(this.state.email, this.state.password);
  }

  render() {
    return (
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>LOGIN</Text>
            <TextInput
                placeholder="Email"
                placeholderTextColor="#c4c3cb"
                style={styles.loginFormTextInput}
                onChangeText={(email) => this.setState({ email })}
            />
            <TextInput
                placeholder="Password"
                placeholderTextColor="#c4c3cb"
                secureTextEntry={true}
                style={styles.loginFormTextInput}
                onChangeText={(password) => this.setState({ password })}
            />
            <Button
                buttonStyle={styles.loginButton}
                title="Login"
                onPress={() => this.onPress()}
            />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  loginScreenContainer: {
    flex: 1
  },
  loginFormView: {
    flex: 1
  },
  logoText: {
    fontSize: 40,
    fontWeight: '800',
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center'
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5
  },
  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    width: 350,
    alignItems: 'center'
  }
});
