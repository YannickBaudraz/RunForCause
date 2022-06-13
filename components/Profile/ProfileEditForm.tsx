import { Button, Text } from '@rneui/base';
import { Image } from '@rneui/themed';
import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Styles from '../../constants/Styles';
import { AuthContext } from '../Auth';

export default class ProfileEditForm extends Component<any, any> {
  static contextType = AuthContext;

  constructor(props: any) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: ''
    };
  }

  async componentDidMount() {
    this.setState({
      name: this.context.user.name,
      email: this.context.user.email,
      phone: this.context.user.phone
    });
  }

  render() {
    return (
        <View style={styles.profileScreenContainer}>
          <View style={styles.profileFormView}>
            <View style={Styles.container}>
              <Text style={styles.logoText}>PROFILE</Text>
            </View>
            <View style={Styles.container}>
              <TextInput
                  placeholder="Name"
                  onChangeText={(name) => this.setState({ name })}
                  value={this.state.name}
                  style={styles.profileFormTextInput}
              />
              <TextInput
                  placeholder="Email"
                  onChangeText={(email) => this.setState({ email })}
                  value={this.state.email}
                  style={styles.profileFormTextInput}
              />
              <TextInput
                  placeholder="Phone"
                  onChangeText={(phone) => this.setState({ phone })}
                  value={this.state.phone}
                  style={styles.profileFormTextInput}
              />
              <Button
                  buttonStyle={styles.profileButton}
                  title="Submit"
                  onPress={() => this.handleSubmit()}
              />
            </View>
            <View style={Styles.container}>
              <Image
                  source={{ uri: this.context.user.picture64FromApi }}
                  style={styles.logo}
              />
            </View>
          </View>
        </View>
    );
  }

  private handleSubmit() {
    throw new Error('Not implemented');
  }
}

const styles = StyleSheet.create({
  profileScreenContainer: {
    flex: 1
  },
  profileFormView: {
    flex: 1
  },
  logoText: {
    fontSize: 40,
    fontWeight: '800',
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center'
  },
  profileFormTextInput: {
    height: 43,
    width: '100%',
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5
  },
  profileButton: {
    backgroundColor: '#00d4b4',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    width: 350,
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'rgba(77,77,77,0.66)'
  }
});
