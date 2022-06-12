import {View} from "react-native";
import {Text} from "@rneui/base";
import Styles from "../constants/Styles";
import {Component} from "react";

export default class RunScreen extends Component {
  render() {
    return (
        <View style={Styles.container}>
          <Text>RunScreen</Text>
        </View>
    );
  }
}


