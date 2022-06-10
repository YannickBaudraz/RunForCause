import BottomTabNavigator from "./BottomTabNavigator";
import {Banner} from "../Banner";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./RootStackParamList";

export default function StackNavigator() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
      <Stack.Navigator>
        <Stack.Screen
            name="Root"
            component={BottomTabNavigator}
            options={{headerShown: false, header: Banner}}
        />
      </Stack.Navigator>
  )
}
