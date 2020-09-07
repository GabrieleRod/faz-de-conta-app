import React, { useState } from 'react';
import { View, TouchableOpacity, ImageBackground, Image, Text, ScrollView, TextInput } from 'react-native';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';


export default function Login() {
    const navigation = useNavigation();

    let campoEmail, campoSenha;

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = () => {
        try {
            navigation.navigate("Home");
        } catch (err) {
            Alert.alert("Ops! Aconteceu algum erro. Tente novamente, por gentileza.");
        }

    };

    return (
        <ImageBackground source={require("../../../assets/login.png")} 
        style={styles.containerBackgroundImage}
        >
            <ScrollView contentContainerStyle={styles.scrollview}>

                <Image source={require('../../../assets/logo.png')} style={styles.imagemLogo} />

                <View style={styles.containerLogin}>

                    <Text style={styles.textInput}>E-mail</Text>

                    <TextInput style={styles.input} 
                    ref={textInput => {campoEmail = textInput}}
                    onChangeText={texto => setEmail(texto)} />

                    <Text style={styles.textInput}>Senha</Text>

                    <View style={[styles.input, styles.inputHistoria]} 
                    ref={textInput => campoSenha = textInput}
                    onChangeText={texto => setSenha(texto)} 
                    textContentType={"password"}
                    secureTextEntry={true} />

                    <TouchableOpacity style={styles.containerBotao}
                    onPress={entrar}
                    >
                        <Text style={styles.textBotao}>ENTRAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.textEC}>Esqueceu a senha?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={styles.textEC}>Não tem um cadastro? Clique aqui.</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>

        </ImageBackground>
    )
};
