import { StyleSheet, Dimensions } from 'react-native';

const LARGURA = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    backgroundColor: '#e6ffff',
  },
  scrollview: {
    padding: 15,
    width: LARGURA,
  },
  textComentario: {
    padding: 10,
    backgroundColor: '#FFEB99',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#FFB366',
    fontSize: 19,
    color: '#804000',
    textAlign: 'justify',
    marginBottom: 2,
  },
  textInput: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 6,
    color: '#333333',
  },
  input: {
    fontSize: 16,
    width: '100%',
    height: 40,
    borderWidth: 1.5,
    borderColor: '#009999',
    borderRadius: 5,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#FFF',
    color: '#333333',
  },
  inputHistoria: {
    height: 300,
  },
  textObservacao: {
    marginTop: 5,
    fontSize: 14,
  },
  containerBotao: {
    width: 200,
    height: 45,
    marginTop: 25,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFEB99',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#FFB366',
  },
  textBotao: {
    fontSize: 17,
    color: '#804000',
  },
});

export default styles;