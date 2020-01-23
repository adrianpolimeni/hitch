import React, { Component } from 'react';
import { Text, View, StyleSheet, Animated, TextInput } from 'react-native';
import { Button, Header } from 'react-native-elements';
import styles from './CodeConfirmStyles';
import CodeInput from 'react-native-code-input';
import firebase from 'react-native-firebase';

 class CodeConfirm extends Component {
  constructor(props){
    super(props);
    this.state = {
      code: '',
      message: 'Confirm'
    };
  }

  confirmCode = (code) => {
    const confirmResult = this.props.navigation.state.params.confirmResult;
    if (confirmResult && code.length) {
      confirmResult.confirm(code)
        .then((user) => {
          this.setState({ message: 'Code Confirmed!' });
          this.props.navigation.navigate('HomeScreen', {User: user});
        })
        .catch(error => this.setState({ message: `Code Confirm Error: ${error.message}` }));
    }
  };

  render() {
    return (
       <View style={styles.container}> 
        <Text style = {styles.header}> Enter confirmation code</Text>
        <CodeInput 
          ref = 'code'
          size = {50}
          codeLength = {6}
          activeColor = 'black'
          inactiveColor='lightgray'
          caretHidden = {true}
          space = {10}
          onFulfill = {(value) => this.confirmCode(value)}
          codeInputStyle={ styles.codeInputStyle }
          containerStyle={ styles.containerStyle }
        />
        </View>
    );
  }
} export default CodeConfirm;
