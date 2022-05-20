import {StyleSheet, View} from 'react-native';
import {Banner} from "./componnents/Banner";

export default function App() {
  return (
      <View style={styles.container}>
        <Banner/>
        <View style={styles.container}>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
