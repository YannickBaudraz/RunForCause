import {LinkingOptions} from "@react-navigation/native";
import {RootStackParamList} from "./RootStackParamList";
import * as Linking from 'expo-linking';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              Login: 'one',
            },
          },
        },
      },
    },
  },
}

export default linking;
