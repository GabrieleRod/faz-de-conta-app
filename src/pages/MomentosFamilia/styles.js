import { StyleSheet, Dimensions } from 'react-native';

const LARGURA = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'flex-start',
    backgroundColor: '#fcfcfc',
    justifyContent: 'space-between',
    resizeMode: 'cover',
  },

  containerOrdenacao:{
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: "#f2f2f2",
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 12,
    paddingRight: 12,
  },
  textoOrdenacao: {
    fontSize: 17,
    color: "#333333",
    marginRight: 3,
  },
  containerpickerOrdenacao: {
    width: '80%',
    height: 30,
    borderWidth: 1,
    borderColor: "#a6a6a6",  
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    justifyContent: 'center',
  },
  picker: {
    color: "#404040",
  },



  containerLista: {
    justifyContent: 'center',
    alignItems: 'baseline',
    padding: 11,
    paddingBottom: 12,
    width: LARGURA,
  },
  elemento: {
    width: 123,
    height: 140,
    borderColor: '#007A99', 
    borderWidth: 1,  
    borderRadius: 8,
    margin: 3,
    marginBottom: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 8,
  },
  texto: {
    width: '100%',
    height: 54,
    color: '#b35900',
    textAlign: "center",  
    fontSize: 17,
    backgroundColor: '#FFEB99',
    padding: 4,
    marginBottom: 0,
    position: 'absolute',
    bottom: 0,
    opacity: 0.9,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  icone: {
    zIndex: 1,
    position: 'absolute',
  },
});

export default styles;