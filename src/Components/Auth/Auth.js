import React, { Component } from 'react';
import { Text, View, StyleSheet, Animated, TextInput} from 'react-native';
import { Button, Header } from 'react-native-elements';
import firebase from 'react-native-firebase';
import PhoneAuth from './PhoneAuth';

export class Auth extends Component {
  constructor(props){
    super(props);
    this.state = {
      phoneNumber: '+1',
      isValid: false,
      message: 'Confirm',
      codeSent: false
    };
  }

  formatNumber(number) {
    var clean = ('' + number).replace(/\D/g, '');
    var match = clean.match(/^1(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      clean = '1 (' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    this.setState({phoneNumber: '+'+clean});
  }

  signIn = () => {
    var number = '+'+this.state.phoneNumber.replace(/\D/g,'');;    
    this.setState({ message: 'Sending code ...' });
    firebase.auth().signInWithPhoneNumber(number)
        .then(confirmResult => this.setState({ confirmResult, message: 'Sign In', codeSent: true }) )
        .catch(error => this.setState({ message: `Sign In With Phone Number Error: ${error.message}` }));
  };
    

  onChange(number){
    this.formatNumber(number);
    this.setState({isValid: this.refs.phone.isValidNumber()});
  }


  logout(){
    firebase.auth().signOut();
  }

  test(){
    console.log("TEST!!!");
  }

}

export default Auth