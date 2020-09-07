import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Historias from './src/pages/Historias';
import CriarHistorias from './src/pages/CriarHistorias';
import Mais from './src/pages/Mais';
import MuralDeDesenhos from './src/pages/MuralDeDesenhos';
import EnviarDesenhos from './src/pages/EnviarDesenhos';
import Jogos from './src/pages/Jogos';
import MomentosFamilia from './src/pages/MomentosFamilia';

const HomeStack = createStackNavigator();
  
function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: '#007A99',
            },
            headerTintColor: '#F2F2F2',
            headerTitleStyle: {
                fontWeight: 'bold',
                //fontFamily: 'Raleway_400Regular',
            },
        }} >
            <HomeStack.Screen name="Home" component={Home} options={{ title: 'Faz de Conta', headerLeft: false }} />
            <HomeStack.Screen name="Historias" component={Historias} options={{ title: 'Histórias' }} />
            <HomeStack.Screen name="CriarHistorias" component={CriarHistorias} options={{ title: 'Conte suas Histórias' }} />
            <HomeStack.Screen name="MuralDeDesenhos" component={MuralDeDesenhos} options={{ title: 'Mural da Imaginação' }} />
            <HomeStack.Screen name="EnviarDesenhos" component={EnviarDesenhos} options={{ title: 'Enviar Desenhos' }} />
            <HomeStack.Screen name="Jogos" component={Jogos} options={{ title: 'Jogos' }} />
            <HomeStack.Screen name="MomentosFamilia" component={MomentosFamilia} options={{ title: 'Momentos em Família' }} />
        </HomeStack.Navigator>
    );
}
  
const HistoriasStack = createStackNavigator();
  
function HistoriasStackScreen() {
    return (
        <HistoriasStack.Navigator screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: '#007A99',
            },
            headerTintColor: '#F2F2F2',
            headerTitleStyle: {
                fontWeight: 'bold',
                //fontFamily: 'Raleway_400Regular',
            },
        }} >
            <HistoriasStack.Screen name="Historias" component={Historias} options={{ title: 'Histórias', headerLeft: false }} />
        </HistoriasStack.Navigator>
    );
}

const MaisStack = createStackNavigator();
  
function MaisStackScreen() {
    return (
        <MaisStack.Navigator screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: '#007A99',
            },
            headerTintColor: '#F2F2F2',
            headerTitleStyle: {
                fontWeight: 'bold',
                //fontFamily: 'Raleway_400Regular',
            },
        }} >
            <MaisStack.Screen name="Mais" component={Mais} options={{ title: 'Mais', headerLeft: false }} />
        </MaisStack.Navigator>
    );
}

export { HomeStackScreen, HistoriasStackScreen, MaisStackScreen };