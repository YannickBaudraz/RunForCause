import {NavigationContainer} from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import {Component} from "react";

export default class Navigation extends Component {
  render() {
    return (
        <NavigationContainer>
          <StackNavigator/>
        </NavigationContainer>
    );
  }
}
