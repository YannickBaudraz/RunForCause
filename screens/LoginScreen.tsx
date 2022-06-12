import { Component } from 'react';
import { View } from 'react-native';
import AuthForm from '../components/AuthForm';
import Styles from '../constants/Styles';

export default class LoginScreen extends Component {
  render() {
    return (
        <View style={Styles.container}>
          <AuthForm/>
        </View>
    );
  }
}
