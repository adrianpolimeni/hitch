import React, { Component} from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import PhoneInput from 'react-native-phone-input';
import styles from './PhoneAuthStyles';
import firebase from 'react-native-firebase';

 class PhoneAuth extends Component {
  constructor(props){
    super(props);
    this.state = {
      phoneNumber: '+1',
      isValid: false,
      buttonText: 'Confirm',
      error: ''
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

  signIn = async () => {
    var number = '+'+this.state.phoneNumber.replace(/\D/g,'');;    
    this.setState({ buttonText: 'Sending code' });
    firebase.auth().signInWithPhoneNumber(number).then((value) => {
      this.props.navigation.navigate('CodeConfirmScreen', {confirmResult: value});

    }).catch(error => this.setState({ error: `Error: ${error.message}`, buttonText:'Confirm' }));
  };
    
  onChangePhoneNumber(number){
    this.formatNumber(number);
    this.setState({isValid: this.refs.phone.isValidNumber()});
  }
  
  onSelectCountry(country){
    this.refs.phone.selectCountry(country);
    this.setState({phoneNumber: '+'+this.refs.phone.getCountryCode()});
  }

  render() {
    return (
       <View style={styles.container}> 
          <Text style = {styles.header}> Enter mobile number </Text>
          <PhoneInput 
          ref = 'phone'
          value = {this.state.phoneNumber}  
          onChangePhoneNumber = {(value) => this.onChangePhoneNumber(value)}
          onSelectCountry = { (country) => this.onSelectCountry(country)}
          flagStyle = {styles.flag}
          textStyle = {styles.text}
          style = {styles.phoneInput}
        />
        <Button
          title={this.state.buttonText}
          disabled={!this.state.isValid}
          buttonStyle={styles.button}
          disabledStyle={styles.buttonDisable}
          type="solid"
          raised={true}
          titleStyle={{fontSize: 22}}
          onPress={this.signIn}
        />
        <Text style = {styles.errorText}>{this.state.error}</Text>
        </View>
    );
  }
} export default PhoneAuth;

