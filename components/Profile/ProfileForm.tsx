import { Button, Text } from '@rneui/base';
import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { AuthContext } from '../Auth';

export default class ProfileForm extends Component<any, any> {
  static contextType = AuthContext;

  constructor(props: any) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: ''
    };
  }

  render() {
    return (
        <View style={styles.profileScreenContainer}>
          <View style={styles.profileFormView}>
            <Text style={styles.logoText}>PROFILE</Text>
            <TextInput
                placeholder="Name"
                onChangeText={(name) => this.setState({ name })}
                value={this.context.user.name}
                style={styles.profileFormTextInput}
            />
            <TextInput
                placeholder="Email"
                onChangeText={(email) => this.setState({ email })}
                value={this.context.user.email}
                style={styles.profileFormTextInput}
            />
            <TextInput
                placeholder="Phone"
                onChangeText={(phone) => this.setState({ phone })}
                value={this.context.user.phone}
                style={styles.profileFormTextInput}
            />
            <Button
                buttonStyle={styles.profileButton}
                title="Submit"
                onPress={() => this.handleSubmit()}
            />
          </View>
        </View>
    );
  }

  private handleSubmit() {
    this.context.updateUser(this.state);
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
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    width: 350,
    alignItems: 'center'
  }
});
