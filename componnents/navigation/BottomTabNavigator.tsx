import LoginScreen from "../../screens/LoginScreen";
import {Banner} from "../Banner";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {RootTabParamList} from "./RouteTabParamList";
import NotFoundScreen from "../../screens/NotFoundScreen";

export default function BottomTabNavigator() {
  const BottomTab = createBottomTabNavigator<RootTabParamList>();

  return (
      <BottomTab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarIconStyle: {display: "none"},
          }}
      >
        <BottomTab.Screen
            name="GPS"
            component={NotFoundScreen}
            options={{
              title: 'GPS',
            }}
        />
        <BottomTab.Screen
            name="Home"
            component={LoginScreen}
            options={{
              title: 'Home',
              header: Banner,
            }}
        />
        <BottomTab.Screen
            name="Profile"
            component={NotFoundScreen}
            options={{
              title: 'Profile',
            }}
        />
      </BottomTab.Navigator>
  );
}
