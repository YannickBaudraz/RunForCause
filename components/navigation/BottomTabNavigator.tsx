import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {RootTabParamList} from "./RouteTabParamList";
import ProfileScreen from "../../screens/ProfileScreen";
import RunScreen from "../../screens/RunScreen";
import {Component} from "react";
import Banner from "../Banner";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default class BottomTabNavigator extends Component {
  render() {
    return (
        <BottomTab.Navigator
            initialRouteName="Profile"
            screenOptions={{
              tabBarIconStyle: {display: "none"},
            }}
        >
          <BottomTab.Screen
              name="Run"
              component={RunScreen}
              options={{
                title: 'Run',
                header: () => <Banner/>,
              }}
          />
          <BottomTab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                title: 'Profile',
              }}
          />
        </BottomTab.Navigator>
    );
  }
}
