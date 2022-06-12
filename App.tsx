import {SafeAreaProvider} from "react-native-safe-area-context";
import React from "react";
import Navigation from "./components/navigation/Navigation";

export default class App extends React.Component {
  render() {
    return (
        <SafeAreaProvider>
          <Navigation/>
        </SafeAreaProvider>
    );
  }
}
