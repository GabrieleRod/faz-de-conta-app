import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, FlatList, Picker } from 'react-native';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';


const HISTORIAS = [
    {
        id: 1,
        imagem: require('../../../assets/aba.jpg'),
        titulo: 'A Bela Adormecida',
    },
    {
        id: 2,
        imagem: require('../../../assets/pinoquio.jpeg'),
        titulo: 'Pinóquio',
    },
    {
        id: 3,
        imagem: require('../../../assets/historia-1.jpeg'),
        titulo: 'Cabelo bom é o quê?',
    },
    {
        id: 4,
        imagem: require('../../../assets/historia-2.jpeg'),
        titulo: 'Sai fora, coronavírus!',
    },
    {
        id: 5,
        imagem: require('../../../assets/historia-3.jpeg'),
        titulo: 'Mínimos contos',
    },
    {
        id: 6,
        imagem: require('../../../assets/historia-4.jpeg'),
        titulo: 'O devaneio no jardim',
    },
    {
        id: 7,
        imagem: require('../../../assets/alice.jpg'),
        titulo: 'Alice no País das Maravilhas',
    },
    {
        id: 8,
        imagem: require('../../../assets/chapeuzinhoVermelho.jpeg'),
        titulo: 'Chapeuzinho Vermelho',
    },
    {
        id: 9,
        imagem: require('../../../assets/cinderela.jpeg'),
        titulo: 'Cinderela',
    },
]


export default function Historias() {
    const navigation = useNavigation();

    const [ordenacao, setOrdenacao] = useState("Ordem Alfabetica");

    return (
        <View style={styles.container}>
            
                <View style={styles.containerOrdenacao}>
        
                    <Text style={styles.textoOrdenacao}>Ordenar:</Text>

                    <View style={styles.containerpickerOrdenacao}>
                        <Picker style={styles.picker} selectedValue = {ordenacao}
                        onValueChange={(value) => { setOrdenacao(value) }} 
                        >
                        <Picker.Item label="Por ordem alfabética" value= "Ordem Alfabetica" />
                        <Picker.Item label="Por ano" value="Ano" />
                        <Picker.Item label="Por autor" value="Autor" />
                        <Picker.Item label="Por faixa etária" value="Faixa Etaria" />

                        </Picker>
                    </View>
                </View>
            
            <FlatList
            contentContainerStyle={styles.containerLista}
            data={HISTORIAS}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (

                <TouchableOpacity onPress={() => {}} style={styles.elemento}>

                    <Image source={item.imagem} style={styles.imagem}/>
                    <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.texto}>
                        {item.titulo}
                    </Text>

                </TouchableOpacity>
            )}
            />
        </View>    
    );
}