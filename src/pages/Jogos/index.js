import React from 'react';
import { View, TouchableOpacity, ImageBackground, Text } from 'react-native';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';

export default function Jogos() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('MomentosFamilia')}
            style={styles.containerVideosJogos}
            >
                <ImageBackground source={require("../../../assets/video.png")} 
                style={styles.containerImage}
                >
                    <Text style={styles.texto}>Momentos em Família</Text>
                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containerVideosJogos}>
                <ImageBackground source={require("../../../assets/mimica.png")} 
                style={styles.containerImage}
                >
                    <Text style={styles.texto}>Jogo de Mímica</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
}