import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import PhoneInput from 'react-native-phone-input';

export default class PhoneAuth extends Component {
  constructor(props){
    super(props);
    this.state = {phoneNumber: '+1', isValid: false};
  }

  formatNumber(number) {
    var clean = ('' + number).replace(/\D/g, '');
    var match = clean.match(/^1(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      clean = '1 (' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    this.setState({phoneNumber: '+'+clean});
  }

  onChange(number){
    this.formatNumber(number);
    this.setState({isValid: this.refs.phone.isValidNumber()});
  }

  render() {
    return (
       <View style={styles.content}> 
        
        <PhoneInput 
          ref='phone'
          value={this.state.phoneNumber}  
          onChangePhoneNumber={(value) => this.onChange(value)}
        />
        <Button
          title="Confirm"
          disabled={!this.state.isValid}
        />
        </View>
        

    );
  }
}

const styles = StyleSheet.create({   
    content: { 
        height: '100%',
        backgroundColor: '#00FF00',
        justifyContent: 'center', 
        alignItems: 'center' 
    }
  });
