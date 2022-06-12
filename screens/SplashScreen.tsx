import {View} from "react-native";
import Styles from "../constants/Styles";
import {Text} from "@rneui/base";

export default function SplashScreen() {
  return (
      <View style={Styles.container}>
        <Text>SplashScreen</Text>
      </View>
  );
}
