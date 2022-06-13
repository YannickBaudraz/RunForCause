import { Component } from 'react';
import { View } from 'react-native';
import { AuthContext } from '../components/Auth';
import EditProfileForm from '../components/Profile/EditProfileForm';
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
          <EditProfileForm navigation={this.props.navigation}/>
        </View>
    );
  }
}
