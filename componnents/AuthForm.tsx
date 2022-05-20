import {StyleSheet, Text, TextInput, View} from "react-native";
import {Button} from "react-native-elements";

export function AuthForm() {

  return (
      <View style={styles.loginScreenContainer}>
        <View style={styles.loginFormView}>
          <Text style={styles.logoText}>LOGIN</Text>
          <TextInput
              placeholder="Username"
              placeholderTextColor="#c4c3cb"
              style={styles.loginFormTextInput}
          />
          <TextInput
              placeholder="Password"
              placeholderTextColor="#c4c3cb"
              secureTextEntry={true}
              style={styles.loginFormTextInput}
          />
          <Button
              buttonStyle={styles.loginButton}
              title="Login"
          />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  loginScreenContainer: {
    flex: 1,
  },
  loginFormView: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: "center",
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: "#3897f1",
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    width: 350,
    alignItems: "center"
  },
});
