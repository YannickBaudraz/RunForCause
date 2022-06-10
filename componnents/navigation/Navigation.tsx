import {NavigationContainer} from "@react-navigation/native";
import StackNavigator from "./StackNavigator";

export default function Navigation() {
  return (
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
  );
}
