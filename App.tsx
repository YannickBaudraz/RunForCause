import {SafeAreaProvider} from "react-native-safe-area-context";
import React from "react";
import Navigation from "./components/navigation/Navigation";

export default function App() {
  return (
      <SafeAreaProvider>
        <Navigation/>
      </SafeAreaProvider>
  );
}
