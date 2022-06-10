import {StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";
import axios from "axios";
import config from "../config";
import {Button} from "@rneui/base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "./navigation/RootStackParamList";

export function AuthForm({navigation}: any) {
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
              onPress={() => onPress(email, password, navigation)}
          />
        </View>
      </View>
  )
}

async function onPress(
    email: string,
    password: string,
    navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>
) {
  axios.post(`${config.apiUrl}/mytoken`, {
    username: email,
    password: password
  }).then(res => {
    storeToken(res.data);
    navigation.navigate('Root');
  })
}

function storeToken(token: string) {
  AsyncStorage.setItem("token", token).then(() => {
    console.log("Token stored");
  }).catch(err => {
    console.log(err);
  });
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
