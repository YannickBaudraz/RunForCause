import {NavigatorScreenParams} from "@react-navigation/native";
import {RootTabParamList} from "./RouteTabParamList";

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Login: undefined;
};
