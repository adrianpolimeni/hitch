/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  
   
} from 'react-native';
import {  Button,ThemeProvider,Header, Text,  Input } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';


const App: () => React$Node = () => {
  return (
    <ThemeProvider  >
      <Header
        backgroundColor={"#5F488C"}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
       
      />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  }}>
              <Text h4 style={{marginBottom:40}}>Enter your mobile number</Text>
              <TextInput
              style={{height: 40,  width: "70%", borderColor: 'gray', borderWidth: 1, marginBottom: 20}}
          keyboardType = "phone-pad"
        />
        <Text style={{marginBottom:40}}>Tap next to verify your account with your phone number.</Text>
        <Button
         
             title="Next"
             
            containerStyle={{width:"90%",}}
            buttonStyle={{borderRadius:15,height:50}}
            ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={{
              colors: ['#8E2DE2', '#7B4FC2'],
              start: { x: 0, y: 0.0 },
              end: { x: 1, y: 1 },
            }}
             
           />
             
      </View>
      
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
  
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',

  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
   
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {

    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
