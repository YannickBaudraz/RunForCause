import { Component } from 'react';
import { View } from 'react-native';
import { AuthContext } from '../components/Auth';
import ProfileEditForm from '../components/Profile/ProfileEditForm';
import Styles from '../constants/Styles';
import { NullUser } from '../model/User';

export default class EditProfileScreen extends Component<any, any> {
  static contextType = AuthContext;

  constructor(props: any) {
    super(props);
    this.state = {
      user: new NullUser(),
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
      user: this.context.user
    });
  }

  render() {
    return (
        <View style={Styles.container}>
          <ProfileEditForm navigation={this.props.navigation}/>
        </View>
    );
  }
}
