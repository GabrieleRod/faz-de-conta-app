import React, { useState } from 'react';
import { View, TouchableOpacity, Alert, Image, Text, ScrollView, TextInput } from 'react-native';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';


export default function Cadastro() {
    const navigation = useNavigation();

    let campoNome, campoDataNascimento, campoEscola, campoSerie, campoMoradores, campoEmail, 
    campoConfirmarSenha, campoSenha;

    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [escola, setEscola] = useState('');
    const [serie, setSerie] = useState('');
    const [moradores, setMoradores] = useState('');
    const [email, setEmail] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = () => {
        try {
            if (senha !== confirmarSenha) {
                Alert.alert("As senhas não conferem. Digite-as novamente, por gentileza.");
            }

            navigation.navigate("Login");
            Alert.alert("Cadastro realizado com sucesso!");
        } catch (err) {
            Alert.alert("Ops! Aconteceu algum erro. Tente novamente, por gentileza.");
        }

    };

    return (
        <ScrollView contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        >
            <View style={styles.containerCadastro}>

                <View style={styles.containerTitle}>
                    <Text style={styles.titleCadastro}>Fazer um cadastro</Text>
                    <Image source={require('../../../assets/logo.png')} style={styles.imagemLogo} />
                </View>

                <Text style={styles.textInput}>Nome da criança</Text>

                <TextInput style={styles.input} 
                ref={textInput => {campoNome = textInput}}
                onChangeText={texto => setNome(texto)} />

                <Text style={styles.textInput}>Data de nascimento</Text>

                <TextInput style={[styles.input, styles.inputMedio]} 
                ref={textInput => {campoDataNascimento = textInput}}
                onChangeText={texto => setDataNascimento(texto)} />

                <Text style={styles.textInput}>Escola</Text>

                <TextInput style={styles.input} 
                ref={textInput => {campoEscola = textInput}}
                onChangeText={texto => setEscola(texto)} />

                <Text style={styles.textInput}>Série</Text>

                <TextInput style={[styles.input, styles.inputMedio]} 
                ref={textInput => {campoSerie = textInput}}
                onChangeText={texto => setSerie(texto)} />

                <Text style={styles.textInput}>Com quem mora</Text>

                <TextInput style={styles.input} 
                ref={textInput => {campoMoradores = textInput}}
                onChangeText={texto => setMoradores(texto)} />

                <Text style={styles.textInput}>E-mail do responsável</Text>

                <TextInput style={styles.input} 
                ref={textInput => {campoEmail = textInput}}
                onChangeText={texto => setEmail(texto)} />

                <Text style={styles.textInput}>Senha</Text>

                <View style={[styles.input, styles.inputHistoria]} 
                ref={textInput => campoSenha = textInput}
                onChangeText={texto => setSenha(texto)} 
                textContentType={"password"}
                secureTextEntry={true} />

                <Text style={styles.textInput}>Confirmar senha</Text>

                <View style={[styles.input, styles.inputHistoria]} 
                ref={textInput => campoConfirmarSenha = textInput}
                onChangeText={texto => setConfirmarSenha(texto)} 
                textContentType={"password"}
                secureTextEntry={true} />

                <TouchableOpacity style={styles.containerBotao}
                onPress={entrar}
                >
                    <Text style={styles.textBotao}>CADASTRAR</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textEC}>Já tem um cadastro? Clique aqui.</Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
    )
};
