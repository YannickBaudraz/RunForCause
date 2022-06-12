import {View} from "react-native";
import {Text} from "@rneui/base";
import Styles from "../constants/Styles";
import {Component} from "react";

export default class ProfileScreen extends Component {
  render() {
    return (
        <View style={Styles.container}>
          <Text>ProfileScreen</Text>
        </View>
    )
  }
}
