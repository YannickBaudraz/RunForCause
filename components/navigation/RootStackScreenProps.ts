import {RootStackParamList} from "./RootStackParamList";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, Screen>;
