import BottomTabNavigator from "./BottomTabNavigator";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./RootStackParamList";
import {Component} from "react";
import Banner from "../Banner";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default class StackNavigator extends Component {
  render() {
    return (
        <Stack.Navigator>
          <Stack.Screen
              name="Root"
              component={BottomTabNavigator}
              options={{headerShown: false, header: () => <Banner/>}}
          />
        </Stack.Navigator>
    )
  }
}
