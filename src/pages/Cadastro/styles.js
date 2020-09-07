import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16, 
    backgroundColor: '#e6ffff',
  },
  containerCadastro: {
    backgroundColor: '#FFF',
    opacity: 0.8,
    marginTop: 15,
    padding: 15,
    paddingTop: 25,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#FFF',
  },
  containerTitle: {
    height: '6%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#8c8c8c',
  },
  titleCadastro: {
    fontSize: 28,
    marginRight: 8,
    color: '#007A99',
  },
  imagemLogo: {
    width: '30%',
    resizeMode: 'contain',
    marginLeft: 8,
  },
  textInput: {
    fontSize: 19,
    marginBottom: 5,
    color: '#404040',
  },
  input: {
    fontSize: 16,
    width: '100%',
    height: 40,
    borderWidth: 1.5,
    borderColor: '#999999',
    borderRadius: 5,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    color: '#1A1A1A',
    marginBottom: 18,
  },
  inputMedio: {
    width: '80%',
  },
  containerBotao: {
    width: '100%',
    height: 45,
    marginTop: 18,
    marginBottom: 14,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffd23f',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ffd23f',
  },
  textBotao: {
    fontSize: 17,
    color: '#333333',
  },
  textEC: {
    marginBottom: 5,
    alignSelf: 'center',
    color: '#333333',
    fontSize: 16,
  },
});

export default styles;