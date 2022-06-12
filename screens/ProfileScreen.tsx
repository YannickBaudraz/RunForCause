import { Text } from '@rneui/base';
import { Component } from 'react';
import { View } from 'react-native';
import Styles from '../constants/Styles';

export default class ProfileScreen extends Component {
  render() {
    return (
        <View style={Styles.container}>
          <Text>ProfileScreen</Text>
        </View>
    );
  }
}
