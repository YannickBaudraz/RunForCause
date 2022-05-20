import {StyleSheet, Text, TextInput, View} from "react-native";
import {Button} from "react-native-elements";
import {useState} from "react";
import axios from "axios";

export function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
      <View style={styles.loginScreenContainer}>
        <View style={styles.loginFormView}>
          <Text style={styles.logoText}>LOGIN</Text>
          <TextInput
              placeholder="Email"
              placeholderTextColor="#c4c3cb"
              style={styles.loginFormTextInput}
              onChangeText={setEmail}
          />
          <TextInput
              placeholder="Password"
              placeholderTextColor="#c4c3cb"
              secureTextEntry={true}
              style={styles.loginFormTextInput}
              onChangeText={setPassword}
          />
          <Button
              buttonStyle={styles.loginButton}
              title="Login"
              onPress={() => onPress(email, password)}
          />
        </View>
      </View>
  )
}

function onPress(email: string, password: string) {
  axios.post(`https://mockapi.mycpnv.ch/api/rfc/mytoken`, {
    username: email,
    password: password
  }).then(res => {
    console.log(res);
    alert("Login successful, token: " + res.data);
  })
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
