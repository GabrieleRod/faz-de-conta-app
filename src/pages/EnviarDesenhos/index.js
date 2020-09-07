import React, { useState } from 'react';
import { Alert, View, TouchableOpacity, ImageBackground, Text, ScrollView, TextInput } from 'react-native';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';


export default function CriarHistorias() {
    const navigation = useNavigation();

    let campoTitulo, campoAutor, campoHistoria, campoContato;

    const enviar = () => {
        try {
            Alert.alert("Desenho enviado com sucesso! \nEstamos ansiosos para vê-lo!");
            navigation.navigate('Home');
        } catch (err) {
            Alert.alert("Ops! Aconteceu algum erro. \nTente enviar novamente, por gentileza.");
        }

    };

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [historia, setHistoria] = useState('');
    const [contato, setContato] = useState('');

    return (
        <ImageBackground source={require("../../../assets/floresta.png")} 
        style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollview}>

                <Text style={styles.textComentario}>
                    {`Libere a sua criatividade e a sua imaginação!
    Chame o papai e a mamãe, mandem um desenho (pode ser relacionado com alguma história que você acabou de ler) e mandem para nós. `}
                </Text>

                <Text style={styles.textInput}>Título</Text>

                <TextInput style={styles.input} 
                ref={textInput => campoTitulo = textInput}
                onChangeText={texto => setTitulo(texto)} 
                placeholder={"Título da história"} />

                <Text style={styles.textInput}>Autor(a)</Text>

                <TextInput style={styles.input} 
                ref={textInput => {campoAutor = textInput}}
                onChangeText={texto => setAutor(texto)} 
                placeholder={"Nome da criança"} />

                <Text style={styles.textInput}>Foto do desenho</Text>

                <View style={[styles.input, styles.inputHistoria]} 
                ref={textInput => campoHistoria = textInput}
                onChangeText={texto => setHistoria(texto)} 
                multiline={true}
                />

                <TouchableOpacity style={styles.containerBotao}
                onPress={enviar}
                >
                    <Text style={styles.textBotao}>ENVIAR</Text>
                </TouchableOpacity>

            </ScrollView>

        </ImageBackground>
    );
}