import { Text } from '@rneui/base';
import { Component } from 'react';
import { View } from 'react-native';
import Styles from '../constants/Styles';

export default class RunScreen extends Component {
  render() {
    return (
        <View style={Styles.container}>
          <Text>RunScreen</Text>
        </View>
    );
  }
}


