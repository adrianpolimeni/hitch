import React from 'react';
import PhoneAuth from './src/Components/Auth/PhoneAuth';
import CodeConfirm from './src/Components/Auth/CodeConfirm';
import Home from './src/Components/Home/Home'
import { StackNavigator } from 'react-navigation';
import Styles from './src/Components/Common/Styles';

const AppNavigator = StackNavigator({
  PhoneAuthScreen: { screen: PhoneAuth, 
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Hitch",
      headerBackTitle: 'Back',
      headerStyle: Styles.headerStyle,
      headerTitleStyle: Styles.headerTitleStyle,
      headerTintColor: "#fff"
    })},
  CodeConfirmScreen: {screen: CodeConfirm, 
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Hitch",
      headerBackTitle: 'Back',
      headerStyle: Styles.headerStyle,
      headerTitleStyle: Styles.headerTitleStyle,
      headerTintColor: "#fff"
    })},
  HomeScreen: {screen: Home, 
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Hitch",
      headerBackTitle: 'Back',
      headerStyle: Styles.headerStyle,
      headerTitleStyle: Styles.headerTitleStyle,
      headerLeft: null,
      headerTintColor: "#fff"
    })}
});

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

