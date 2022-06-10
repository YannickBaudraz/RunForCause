import {View} from "react-native";
import {AuthForm} from "../components/AuthForm";
import Styles from "../constants/Styles";

export default function LoginScreen() {
  return (
      <View style={Styles.container}>
        <AuthForm/>
      </View>
  );
}
