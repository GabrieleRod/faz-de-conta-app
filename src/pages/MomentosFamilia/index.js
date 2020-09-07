import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, FlatList, Picker } from 'react-native';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const MOMENTOS = [
    {
        id: 1,
        imagem: require('../../../assets/videos-1.jpeg'),
        titulo: 'A Bela Adormecida',
        autor: 'Charles Perrault',
        ano: 1697,
    },
    {
        id: 2,
        imagem: require('../../../assets/videos-2.jpeg'),
        titulo: 'A Bela Adormecida',
        autor: 'Charles Perrault',
        ano: 1697,
    },
    {
        id: 3,
        imagem: require('../../../assets/videos-3.jpeg'),
        titulo: 'A Bela Adormecida',
        autor: 'Charles Perrault',
        ano: 1697,
    },
    {
        id: 4,
        imagem: require('../../../assets/videos-4.jpeg'),
        titulo: 'A Bela Adormecida',
        autor: 'Charles Perrault',
        ano: 1697,
    },
    {
        id: 5,
        imagem: require('../../../assets/videos-5.jpeg'),
        titulo: 'A Bela Adormecida',
        autor: 'Charles Perrault',
        ano: 1697,
    },
    {
        id: 6,
        imagem: require('../../../assets/videos-6.jpeg'),
        titulo: 'A Bela Adormecida',
        autor: 'Charles Perrault',
        ano: 1697,
    },
    {
        id: 7,
        imagem: require('../../../assets/videos-7.jpeg'),
        titulo: 'A Bela Adormecida',
        autor: 'Charles Perrault',
        ano: 1697,
    },
    {
        id: 8,
        imagem: require('../../../assets/videos-8.jpeg'),
        titulo: 'A Bela Adormecida',
        autor: 'Charles Perrault',
        ano: 1697,
    },
]


export default function MomentosFamilia() {
    const navigation = useNavigation();

    const [ordenacao, setOrdenacao] = useState("Ano");

    return (
        <View style={styles.container}>
            
                <View style={styles.containerOrdenacao}>
        
                    <Text style={styles.textoOrdenacao}>Ordenar:</Text>

                    <View style={styles.containerpickerOrdenacao}>
                        <Picker style={styles.picker} selectedValue = {ordenacao}
                        onValueChange={(value) => { setOrdenacao(value) }} 
                        >
                        <Picker.Item label="Por ano" value="Ano" />
                        <Picker.Item label="Por autor" value="Autor" />
                        <Picker.Item label="Por mais visto" value="Mais Visto" />
                        <Picker.Item label="Por menos visto" value="Menos Visto" />

                        </Picker>
                    </View>
                </View>
            
            <FlatList
            contentContainerStyle={styles.containerLista}
            data={MOMENTOS}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (

                <TouchableOpacity onPress={() => {}} style={styles.elemento}>

                    <Image source={item.imagem} style={styles.imagem}/>

                    <TouchableOpacity style={styles.icone}>
                        <Ionicons name={'ios-play'} size={52} color={'#FFF'} />
                    </TouchableOpacity>

                </TouchableOpacity>
            )}
            />
        </View>    
    );
}