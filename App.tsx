import {Banner} from "./componnents/Banner";
import {SafeAreaView} from "react-native-safe-area-context";
import React from "react";
import Login from "./screens/Login";

export default function App() {
  return (
      <SafeAreaView
          style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}
      >
        <Banner/>
        <Login/>
      </SafeAreaView>
  );
}
