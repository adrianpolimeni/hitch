import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Colors = {
    light: '#A8DADC',
    primary: '#457B9D',
    primarydark: '#1D3557',
    highlight: '#F6E081',
    grey: '#7F8A8D',
    dark: '#494A4E',
    error: '#E63946',
    white: '#F1FAEE'
}

export default StyleSheet.create({
    headerStyle: {
        backgroundColor: Colors.primary,
        elevation: null,
        shadowOpacity: 0.9,
        height: 64
    },
    headerTitleStyle: {
        color: Colors.white,
        fontSize: 50,
        fontFamily: 'Damion',
        textAlign: 'center',
        textAlignVertical: "top",
        paddingHorizontal: 10,
        paddingVertical:0,
        textShadowColor: Colors.grey,
        textShadowRadius: 10,
    }
});