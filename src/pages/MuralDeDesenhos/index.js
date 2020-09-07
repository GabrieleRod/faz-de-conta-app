import React, { useState } from 'react';
import { View, TouchableOpacity, ImageBackground, Image, Text, FlatList, Picker, ScrollView } from 'react-native';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const HISTORIAS = [
    {
        id: 1,
        imagem: require('../../../assets/house.jpg'),
        titulo: 'Casa',
        autor: 'Gabriele',
        ano: 2020,
    },
    {
        id: 2,
        imagem: require('../../../assets/ddm-1.jpg'),
        titulo: 'Casa',
        autor: 'Gabriele',
        ano: 2020,
    },
    {
        id: 3,
        imagem: require('../../../assets/ddm-2.jpg'),
        titulo: 'Casa',
        autor: 'Gabriele',
        ano: 2020,
    },
    {
        id: 4,
        imagem: require('../../../assets/ddm-3.jpg'),
        titulo: 'Casa',
        autor: 'Gabriele',
        ano: 2020,
    },
    {
        id: 5,
        imagem: require('../../../assets/ddm-4.jpg'),
        titulo: 'Casa',
        autor: 'Gabriele',
        ano: 2020,
    },
    {
        id: 6,
        imagem: require('../../../assets/ddm-5.jpg'),
        titulo: 'Casa',
        autor: 'Gabriele',
        ano: 2020,
    },
    {
        id: 7,
        imagem: require('../../../assets/ddm-6.jpg'),
        titulo: 'Casa',
        autor: 'Gabriele',
        ano: 2020,
    },
    {
        id: 8,
        imagem: require('../../../assets/ddm-7.jpg'),
        titulo: 'Casa',
        autor: 'Gabriele',
        ano: 2020,
    },
    {
        id: 9,
        imagem: require('../../../assets/ddm-8.jpg'),
        titulo: 'Casa',
        autor: 'Gabriele',
        ano: 2020,
    },
]


export default function Historias() {
    const navigation = useNavigation();

    const [ordenacao, setOrdenacao] = useState("0");

    const [curtiu, setCurtiu] = useState(false);

    const nameIconStar = (curtiu) => {
        
        let nameIcon = 'ios-star-outline'; 

        if (curtiu) {
            nameIcon = 'ios-star';
            return nameIcon;
        }

        return nameIcon;
    };

    const colorIconStart = (curtiu) => {

        let colorIcon = '#b3b3b3';

        if (curtiu) {
            colorIcon = '#ffcc00';
            return colorIcon;
        }

        return colorIcon;
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.containerTextComentario}>
                    <Text style={styles.textComentario}>
                        Você gosta de desenhar?
                    </Text>

                    <TouchableOpacity style={styles.containerBotao}
                    onPress={() => { navigation.navigate("EnviarDesenhos") }}
                    >
                        <Text style={styles.textBotao}>NOS ENVIE UM DESENHO</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.containerOrdenacao}>
        
                    <Text style={styles.textoOrdenacao}>Ordenar:</Text>

                    <View style={styles.containerpickerOrdenacao}>
                        <Picker style={styles.picker} selectedValue = {ordenacao}
                        onValueChange={(value) => setOrdenacao(value) } 
                        >
                        <Picker.Item label="Por data de envio" value= "0" />
                        <Picker.Item label="Por ano" value="Ano" />
                        <Picker.Item label="Por categoria" value="Categoria" />
                        <Picker.Item label="Por mais curtido" value="Mais Curtido" />
                        <Picker.Item label="Por menos curtido" value="Menos Curtido" />

                        </Picker>
                    </View>
                </View>

            </View>
            
            <FlatList
            contentContainerStyle={styles.containerLista}
            data={HISTORIAS}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (

                <View style={styles.containerPublicacao}>

                    <TouchableOpacity onPress={() => {}} style={styles.elemento}>
                        <Image source={item.imagem} style={styles.imagem}/>
                    </TouchableOpacity>
                    
                    <View style={styles.icone}>
                        <Ionicons name={nameIconStar(curtiu)} size={32} 
                        color={colorIconStart(curtiu)} 
                        onPress={() => setCurtiu(!curtiu)}
                        />
                    </View>

                </View>
            )}
            />
        </View>   
    );
}