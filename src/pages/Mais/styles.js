import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 40,
        backgroundColor: '#fcfcfc',
        justifyContent: 'flex-start',
    },
    elemento: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff0b3',
        padding: 1, 
        marginBottom: 14,
        borderWidth: 1,
        borderColor: '#FFB366',
        flexDirection: 'row',
    },
    elementoSair: {
        marginBottom: 0,
    },
    containerImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        fontSize: 21,
        padding: 10,
        opacity: 0.9,
        color: '#262626',
        textAlign: 'center',
    },
    icone: {
        left: 25,
        position: 'absolute',        
    },
});

export default styles;