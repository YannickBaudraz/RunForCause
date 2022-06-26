import { Text } from '@rneui/themed';
import { Component } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class Banner extends Component {
  render() {
    return (
        <SafeAreaView>
          <Text h1={true} style={styles.banner}>
            Run for cause
          </Text>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    backgroundColor: 'whitesmoke',
    width: '100%',
    padding: 15
  }
});
