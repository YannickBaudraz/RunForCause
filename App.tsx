import {StyleSheet, View} from 'react-native';
import {Banner} from "./componnents/Banner";
import {AuthForm} from "./componnents/AuthForm";
import {GeoLocation} from "./componnents/GeoLocation";

export default function App() {
  return (
      <View style={styles.container}>
        <Banner/>
        <View style={styles.container}>
          <AuthForm/>
        </View>
        <View style={styles.container}>
          <GeoLocation/>
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

