import { StyleSheet, Dimensions } from 'react-native';
import {Colors} from '../Common/Styles';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: height,
    paddingHorizontal: 15,
    backgroundColor: Colors.white
  },
  button: {
    width: width - 30,
    height: 50,
    backgroundColor: Colors.primary
  },
  buttonDisable: {
    width: width - 30,
    height: 50,
  },
  phoneInput: {
    borderWidth: 1,
    borderRadius: 3,
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: 'lightgrey'
  },
  flag: {
    width: 48,
    height: 30
  },
  text: {
    justifyContent: 'center',
    fontSize: 22,
    height:35
  },
  errorText: {
    marginTop: 10,
    fontSize: 16,
    color: Colors.error
  },
  header:{
    marginHorizontal: 0,
    marginTop: 32,
    marginBottom: 4,
    color: Colors.dark,
    fontSize: 28,
    fontFamily: 'assistant',
    fontWeight: 'normal',
    textAlign: 'left'
  }
});
