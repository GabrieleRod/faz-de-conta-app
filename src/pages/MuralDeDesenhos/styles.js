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


  containerTextComentario: {
    width: LARGURA,
    padding: 15,
    backgroundColor: '#e6ffe6',
    alignItems: 'flex-start',
  },
  textComentario: {
    fontSize: 19,
    color: '#333333',
    textAlign: 'justify',
  },
  containerBotao: {
    width: '60%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFEB99',
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#FFB366',
    marginTop: 10,
  },
  textBotao: {
    fontSize: 16,
    color: '#804000',
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
    paddingBottom: 16,
    paddingTop: 14,
    width: LARGURA,
  },
  containerPublicacao: {
    width: 123,
    height: 150,
    borderColor: '#cccccc', 
    borderWidth: 1,  
    borderRadius: 8,
    margin: 3,
    marginBottom: 4,
  },
  elemento: {
    
    height: '68%',
  },
  imagem: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    alignSelf: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  icone: {
    width: '100%',
    alignItems: 'center',
    padding: 8,
  },
});

export default styles;