import {StyleSheet} from "react-native";
import {Text} from "@rneui/themed";
import {SafeAreaView} from "react-native-safe-area-context";

export function Banner() {
  return (
      <SafeAreaView>
        <Text h1={true} style={styles.banner}>
          Run for cause
        </Text>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  banner: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#f0f0f0",
    textAlign: "center",
    backgroundColor: "#ABC",
    width: "100%",
  }
})
