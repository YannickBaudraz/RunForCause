import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Component } from 'react';
import LoginScreen from '../../screens/LoginScreen';
import { AuthContext } from '../Auth';
import Banner from '../Banner/Banner';
import BottomTabNavigator from './BottomTabNavigator';
import { RootStackParamList } from './RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default class StackNavigator extends Component {
  static contextType = AuthContext;

  render() {
    return (
        <Stack.Navigator>
          {this.context.isAuthenticated ? (
              <Stack.Screen
                  name="Root"
                  component={BottomTabNavigator}
                  options={{ headerShown: false, header: () => <Banner/> }}
              />
          ) : (
               <Stack.Screen
                   name="Login"
                   component={LoginScreen}
                   options={{ headerShown: false, header: () => <Banner/> }}
               />
           )}
        </Stack.Navigator>
    );
  }
}
