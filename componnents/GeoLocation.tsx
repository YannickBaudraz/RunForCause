import * as Location from "expo-location";
import {View} from "react-native";
import {Text} from "@rneui/themed";
import {useEffect, useState} from "react";

export function GeoLocation() {
  const [location, setLocation] = useState<Location.LocationObject>();
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    let isMounted = true;

    Location.getForegroundPermissionsAsync().then(async perm => {
      if (!perm.granted) {
        await Location.requestForegroundPermissionsAsync().catch(err => console.log(err));
      }

      Location.watchPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
      }, async locationObj => {
        if (!location) {
          Location.reverseGeocodeAsync(locationObj.coords).then(res => {
            console.log(res)
            isMounted && setCityName(res[0].city!);
          }).catch(err => console.log(err));
        }
        isMounted && setLocation(locationObj);
      }).catch(err => console.log(err));
    });

    return () => {
      isMounted = false
    }
  });

  return (
      <View>
        <Text>Vous êtes à {cityName}</Text>
        <Text>Latitude : {location?.coords.latitude}</Text>
        <Text>Longitude : {location?.coords.longitude}</Text>
        <Text>Altitude : {location?.coords.altitude}</Text>
      </View>
  );
}
