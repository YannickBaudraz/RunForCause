import {View} from "react-native";
import Styles from "../constants/Styles";
import {Text} from "@rneui/base";
import {Component} from "react";

export default class SplashScreen extends Component {
  render() {
    return (
        <View style={Styles.container}>
          <Text>SplashScreen</Text>
        </View>
    );
  }
}
