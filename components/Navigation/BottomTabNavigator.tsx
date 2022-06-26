import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/base';
import { Component } from 'react';
import { StyleSheet } from 'react-native';
import ProfileScreen from '../../screens/ProfileScreen';
import RunScreen from '../../screens/RunScreen';
import Banner from '../Banner/Banner';
import { RootTabParamList } from './RouteTabParamList';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default class BottomTabNavigator extends Component {
  render() {
    return (
        <BottomTab.Navigator
            initialRouteName="Profile"
            screenOptions={{
              tabBarIconStyle: { display: 'none' }
            }}
        >
          <BottomTab.Screen
              name="Run"
              component={RunScreen}
              options={{
                title: 'Run',
                tabBarIcon: ({ color, size }) => (<Icon name="directions-run" color={color} size={size}/>),
                tabBarIconStyle: { display: 'flex' },
                tabBarLabelStyle: styles.text
              }}
          />
          <BottomTab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                title: 'Profile',
                tabBarIcon: ({ color, size }) => (<Icon name="account-circle" color={color} size={size}/>),
                tabBarIconStyle: { display: 'flex' },
                tabBarLabelStyle: styles.text,
                header: () => <Banner/>
              }}
          />
        </BottomTab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15
  }
});
