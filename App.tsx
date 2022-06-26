import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './components/Auth';
import Navigation from './components/Navigation/Navigation';

export default class App extends React.Component {
  render() {
    return (
        <SafeAreaProvider>
          <AuthProvider>
            <Navigation/>
          </AuthProvider>
        </SafeAreaProvider>
    );
  }
}
