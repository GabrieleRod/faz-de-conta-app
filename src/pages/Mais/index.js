import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Mais() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.elemento} >
                <Text style={styles.texto}>Minhas Histórias</Text>

                <TouchableOpacity style={styles.icone}>
                    <Ionicons name={'ios-bookmark'} size={25} color={'#333333'} />
                </TouchableOpacity>

            </TouchableOpacity>

            <TouchableOpacity style={styles.elemento}>
                <Text style={styles.texto}>Meus Desenhos</Text>

                <TouchableOpacity style={styles.icone}>
                    <Ionicons name={'ios-color-palette'} size={25} color={'#333333'} />
                </TouchableOpacity>

            </TouchableOpacity>

            <TouchableOpacity style={styles.elemento}>
                <Text style={styles.texto}>Meus Vídeos</Text>

                <TouchableOpacity style={styles.icone}>
                    <Ionicons name={'ios-videocam'} size={25} color={'#333333'} />
                </TouchableOpacity>

            </TouchableOpacity>

            <TouchableOpacity style={styles.elemento}>
                <Text style={styles.texto}>Configurações</Text>

                <TouchableOpacity style={styles.icone}>
                    <Ionicons name={'ios-settings'} size={25} color={'#333333'} />
                </TouchableOpacity>

            </TouchableOpacity>

            <TouchableOpacity style={[styles.elemento, styles.elementoSair]}
            onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.texto}>Sair</Text>

                <TouchableOpacity style={styles.icone}>
                    <Ionicons name={'ios-log-out'} size={25} color={'#333333'} />
                </TouchableOpacity>

            </TouchableOpacity>
        </View>
    );
}