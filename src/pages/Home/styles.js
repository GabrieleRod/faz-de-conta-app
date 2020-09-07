import { StyleSheet, Dimensions } from 'react-native';

const ALTURA = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  containerBackgroundImage: {
      flex: 1,
      height: '110%',
      alignItems: 'center',
      backgroundColor: '#e6ffff',
      padding: 18, 
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
  },
  elemento: {
      width: '48%',
      height: '30%',
      marginBottom: 12,
      backgroundColor: '#FFEB99',
      borderColor: '#007A99', 
      borderWidth: 3,  
      borderRadius: 8,
      paddingBottom: 5,
      paddingTop: 5,
      margin: 3,
  },
  elementoHistorias: {
    width: '80%',
  },
  elementoJogos: {
    width: '60%',
  },
  icone: {
    height: '70%',
    resizeMode: 'contain',
    alignSelf: 'center',
    top: 6,
    marginBottom: 15,
  },
  iconeHistorias: {
    width: '70%',
    height: '70%',
    resizeMode: 'stretch',
  },
  texto: {
      width: '100%',
      color: '#000000',
      textAlign: "center",  
      fontSize: 20,
      backgroundColor: '#FFB366',
      padding: 5,
      marginBottom: 5,
      position: 'absolute',
      bottom: 0,
      opacity: 0.9,
  }    
});

export default styles;