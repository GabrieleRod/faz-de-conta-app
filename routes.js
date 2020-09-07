import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomNavigator from "./BottomNavigator";
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer >
            <AppStack.Navigator screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: '#007A99',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }} initialRouteName="Login" mode='modal' >
                <AppStack.Screen name="Home" component={BottomNavigator} options={{headerShown: false}}/>
                <AppStack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <AppStack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
};