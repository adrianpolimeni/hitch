import { StyleSheet, Dimensions } from 'react-native';
import {Colors} from '../Common/Styles';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: height,
    paddingHorizontal: 15,
    backgroundColor: Colors.white
  },
  text: {
    justifyContent: 'center',
    fontSize: 22,
    height:35
  },
  containerStyle: {
    maxHeight: 50,
    margin: 0,
    paddingVertical: 0,
  }, 
  codeInputStyle: {
    borderWidth: 1.5, 
    fontSize: 32,
    backgroundColor: '#FDFFFC'
  },
  header:{
    marginTop: 32,
    color: Colors.dark,
    fontSize: 28,
    fontFamily: 'assistant',
    fontWeight: 'normal',
    textAlign: 'center'
  }
});
