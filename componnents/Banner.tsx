import {StyleSheet, Text} from "react-native";

export function Banner() {
  return (
      <Text style={styles.banner}>
        <h1>Run for cause</h1>
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
