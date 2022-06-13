import { Component } from 'react';
import { View } from 'react-native';
import ProfileForm from '../components/Profile/ProfileForm';
import Styles from '../constants/Styles';
import User from '../model/User';

export default class ProfileScreen extends Component<any, { user: User }> {
  render() {
    return (
        <View style={Styles.container}>
          <ProfileForm/>
        </View>
    );
  }
}
