import { Text } from '@rneui/base';
import { Component } from 'react';
import { View } from 'react-native';
import Styles from '../constants/Styles';

export default class SplashScreen extends Component {
  render() {
    return (
        <View style={Styles.container}>
          <Text>SplashScreen</Text>
        </View>
    );
  }
}
