import { NavigationProp } from '@react-navigation/core/src/types';
import axios, { AxiosRequestConfig } from 'axios';
import {
  Accuracy,
  getForegroundPermissionsAsync,
  LocationObject,
  LocationOptions,
  LocationPermissionResponse,
  LocationSubscription,
  requestForegroundPermissionsAsync,
  watchPositionAsync
} from 'expo-location';
import { Component } from 'react';
import { Dimensions } from 'react-native';
import MapView, { Region } from 'react-native-maps';
import config from '../../config';
import { AuthContext } from '../Auth';
import { RootTabParamList } from '../navigation/RouteTabParamList';

type GeoLocationProps = {
  navigation: NavigationProp<RootTabParamList>;
}

type GeoLocationState = {
  location: LocationObject | null;
  region: Region;
  locationSubscription: LocationSubscription | null
  unsubscribeFocusListener: () => void;
  unsubscribeBlurListener: () => void;
}

export class GeoLocation extends Component<GeoLocationProps, GeoLocationState> {
  static contextType = AuthContext;

  constructor(props: any) {
    super(props);

    this.state = {
      location: null,
      region: { latitude: 0, longitude: 0, latitudeDelta: 0, longitudeDelta: 0 },
      locationSubscription: null,
      unsubscribeFocusListener: () => {},
      unsubscribeBlurListener: () => {}
    };
  }

  componentDidMount() {
    this.addFocusListener();
  }

  componentWillUnmount() {
    this.state.locationSubscription?.remove();
    this.state.unsubscribeFocusListener();
    this.state.unsubscribeBlurListener();
  }

  render() {
    return (
        <MapView
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height
            }}
            region={{
              latitude: this.state.location?.coords.latitude ?? 0,
              longitude: this.state.location?.coords.longitude ?? 0,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
            zoomEnabled={false}
            scrollEnabled={false}
            minZoomLevel={15}
            showsUserLocation={true}
        ></MapView>
    );
  }

  private addFocusListener() {
    this.props.navigation.addListener('focus', () => this.watchLocation());
  }

  private watchLocation() {
    getForegroundPermissionsAsync().then(async (perm: LocationPermissionResponse) => {
      if (!perm.granted) {
        await requestForegroundPermissionsAsync().catch(console.error);
      }

      const options: LocationOptions = {
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000 * 5
      };

      watchPositionAsync(options, (location: LocationObject) => {
        this.setState({ location });
        this.sendLocationToBackend(location);
      })
          .then((locationSubscription: LocationSubscription) => this.setState({
            locationSubscription,
            unsubscribeBlurListener: this.addBlurListener(locationSubscription)
          })).catch(console.error);
    });
  }

  private addBlurListener(locationSubscription: LocationSubscription) {
    return this.props.navigation.addListener('blur', () => locationSubscription.remove());
  }

  private sendLocationToBackend(location: LocationObject) {
    const locationUrl = `${config.url.api}/location`;
    const coordinates = { lat: location.coords.latitude, long: location.coords.longitude };
    const requestConfig: AxiosRequestConfig = { headers: { Authorization: `Bearer ${this.context.token}` } };

    axios.post(locationUrl, coordinates, requestConfig)
         .catch(console.error);
  }
}
