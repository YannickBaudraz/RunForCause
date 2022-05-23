import {StyleSheet} from "react-native";
import {Text} from "@rneui/themed";

export function Banner() {
  return (
      <Text h1={true} style={styles.banner}>
        Run for cause
      </Text>
  );
}

const styles = StyleSheet.create({
  banner: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#f0f0f0",
    textAlign: "center",
    margin: 10,
    backgroundColor: "#ABC",
    borderRadius: 10,
    width: "95%",
  }
})
