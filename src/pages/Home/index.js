import React from 'react';
import { TouchableOpacity, ImageBackground, Image, Text } from 'react-native';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';


export default function Home() {
    const navigation = useNavigation();

    return (
        <ImageBackground source={require("../../../assets/home-2.png")} 
        style={styles.containerBackgroundImage}
        >

            <TouchableOpacity onPress={() => {navigation.navigate('Historias')}} 
            style={[styles.elemento, styles.elementoHistorias]}
            >
                <Image source={require("../../../assets/historias.png")} 
                style={[styles.icone, styles.iconeHistorias]} imageStyle={{borderRadius: 5}}/>

                <Text style={styles.texto}>Histórias</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => {navigation.navigate('CriarHistorias')}} 
            style={styles.elemento}
            >
                <Image source={require("../../../assets/escrever.png")} 
                style={styles.icone} imageStyle={{borderRadius: 5}}/>

                <Text style={styles.texto}>Conte suas Histórias</Text>

            </TouchableOpacity>
        
            <TouchableOpacity onPress={() => {navigation.navigate('MuralDeDesenhos')}} 
            style={styles.elemento}
            >
                <Image source={require("../../../assets/desenhar.png")} 
                style={styles.icone} imageStyle={{borderRadius: 5}}/>

                <Text style={styles.texto}>Mural da Imaginação</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => {navigation.navigate('Jogos')}} 
            style={[styles.elemento, styles.elementoJogos]}
            >
                <Image source={require("../../../assets/jogos.png")} 
                style={styles.icone} imageStyle={{borderRadius: 5}}/>

                <Text style={styles.texto}>Jogos</Text>

            </TouchableOpacity>
            
        </ImageBackground>    
    );
};