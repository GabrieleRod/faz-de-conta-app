import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f2f2f2',
    },
    containerVideosJogos: {
        height: 100,
        alignItems: 'center',
        backgroundColor: '#FFEB99',
        padding: 1, 
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#006680',
    },
    containerImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        width: '100%',
        fontSize: 20,
        padding: 12,
        backgroundColor: '#FFF',
        opacity: 0.9,
        color: '#000',
        textAlign: 'center',
    },
});

export default styles;