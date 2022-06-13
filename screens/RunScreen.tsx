import { Component } from 'react';
import { View } from 'react-native';
import { GeoLocation } from '../components/GeoLocation/GeoLocation';
import Styles from '../constants/Styles';

export default class RunScreen extends Component<any, any> {
  render() {
    return (
        <View style={Styles.container}>
          <GeoLocation navigation={this.props.navigation}/>
        </View>
    );
  }
}


