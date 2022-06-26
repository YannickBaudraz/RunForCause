import { NavigationProp } from '@react-navigation/core/src/types';
import {
  Accuracy,
  getForegroundPermissionsAsync,
  LocationGeocodedAddress,
  LocationObject,
  LocationOptions,
  LocationPermissionResponse,
  LocationSubscription,
  requestForegroundPermissionsAsync,
  reverseGeocodeAsync,
  watchPositionAsync
} from 'expo-location';
import { Component } from 'react';
import { Dimensions } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import GeoLocationService from '../../services/GeoLocationService';
import { AuthContext } from '../Auth';
import { RootTabParamList } from '../Navigation/RouteTabParamList';

type GeoLocationProps = {
  navigation: NavigationProp<RootTabParamList>;
}

type GeoLocationState = {
  location: LocationObject | null;
  region: Region;
  address: LocationGeocodedAddress | null;
  locationSubscription: LocationSubscription | null
  unsubscribeFocusListener: () => void;
  unsubscribeBlurListener: () => void;
}

export class GeoLocation extends Component<GeoLocationProps, GeoLocationState> {
  static contextType = AuthContext;

  private readonly locationService = new GeoLocationService();

  constructor(props: any) {
    super(props);

    this.state = {
      location: null,
      region: { latitude: 0, longitude: 0, latitudeDelta: 0, longitudeDelta: 0 },
      address: null,
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
            rotateEnabled={false}
        >
          <Marker
              coordinate={this.state.location?.coords ?? { latitude: 0, longitude: 0 }}
              title={this.state.address?.city ?? 'Unknown'}
              description={`${this.state.address?.street ?? 'Unknown'} ${this.state.address?.streetNumber ?? ''}`}
          />
        </MapView>
    );
  }

  private addFocusListener() {
    this.props.navigation.addListener('focus', () => this.watchLocation());
  }

  private watchLocation() {
    getForegroundPermissionsAsync().then(async (perm: LocationPermissionResponse) => {
      if (!perm.granted) {
        await requestForegroundPermissionsAsync();
      }

      const options: LocationOptions = {
        accuracy: Accuracy.BestForNavigation,
      };

      watchPositionAsync(options, (location: LocationObject) => {
        reverseGeocodeAsync(location.coords).then((add: LocationGeocodedAddress[]) => {
          add[0] && this.setState({ address: add[0] });
        });
        this.setState({ location });
        this.sendCurrentPosition(location);
      }).then((locationSubscription: LocationSubscription) => this.setState({
        locationSubscription,
        unsubscribeBlurListener: this.addBlurListener(locationSubscription)
      }))
    });
  }

  private addBlurListener(locationSubscription: LocationSubscription) {
    return this.props.navigation.addListener('blur', () => locationSubscription.remove());
  }

  private sendCurrentPosition(location: LocationObject) {
    this.locationService.sendPosition({
      lat: location.coords.latitude,
      long: location.coords.longitude
    });
  }
}
