import {NavigationContainer} from "@react-navigation/native";
import LinkingConfiguration from "./LinkingConfiguration";
import {RootStackParamList} from "./RootStackParamList";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {RootTabParamList} from "./RouteTabParamList";
import Login from "../../screens/Login";
import {Banner} from "../Banner";

export default function Navigation() {
  return (
      <NavigationContainer
          linking={LinkingConfiguration}>
        <Stack.Navigator>
          <Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false, header: Banner}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
      <BottomTab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarIconStyle: {display: "none"},
          }}
      >
        <BottomTab.Screen
            name="GPS"
            component={Login}
            options={{
              title: 'GPS',
            }}
        />
        <BottomTab.Screen
            name="Home"
            component={Login}
            options={{
              title: 'Home',
              header: Banner,
            }}
        />
        <BottomTab.Screen
            name="Profile"
            component={Login}
            options={{
              title: 'Profile',
            }}
        />
      </BottomTab.Navigator>
  );
}
