import {View} from "react-native";
import AuthForm from "../components/AuthForm";
import Styles from "../constants/Styles";
import {Component} from "react";

export default class LoginScreen extends Component {
  render() {
    return (
        <View style={Styles.container}>
          <AuthForm/>
        </View>
    );
  }
}
