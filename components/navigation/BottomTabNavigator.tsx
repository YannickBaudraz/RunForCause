import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Component } from 'react';
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
                header: () => <Banner/>
              }}
          />
          <BottomTab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                title: 'Profile'
              }}
          />
        </BottomTab.Navigator>
    );
  }
}
