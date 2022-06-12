import { NavigationContainer } from '@react-navigation/native';
import { Component } from 'react';
import SplashScreen from '../../screens/SplashScreen';
import { AuthContext } from '../Auth';
import StackNavigator from './StackNavigator';

export default class Navigation extends Component {
  static contextType = AuthContext;

  render() {
    return this.context.isLoading
           ? (
               <SplashScreen/>
           )
           : (
               <NavigationContainer>
                 <StackNavigator/>
               </NavigationContainer>
           );
  }
}
