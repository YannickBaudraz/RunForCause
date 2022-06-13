import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Component } from 'react';
import EditProfileScreen from '../../screens/EditProfileScreen';
import LoginScreen from '../../screens/LoginScreen';
import { AuthContext } from '../Auth';
import BottomTabNavigator from './BottomTabNavigator';
import { RootStackParamList } from './RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default class StackNavigator extends Component {
  static contextType = AuthContext;

  render() {
    return (
        <Stack.Navigator>
          {this.context.isAuthenticated ? (
              <>
                <Stack.Screen
                    name="Root"
                    component={BottomTabNavigator}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="EditProfile"
                    component={EditProfileScreen}
                    options={{ headerShown: false }}
                />
              </>
          ) : (
               <Stack.Screen
                   name="Login"
                   component={LoginScreen}
                   options={{ headerShown: false }}
               />
           )}
        </Stack.Navigator>
    );
  }
}
