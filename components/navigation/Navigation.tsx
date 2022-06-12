import { NavigationContainer } from '@react-navigation/native';
import { Component } from 'react';
import StackNavigator from './StackNavigator';

export default class Navigation extends Component {
  render() {
    return (
        <NavigationContainer>
          <StackNavigator/>
        </NavigationContainer>
    );
  }
}
