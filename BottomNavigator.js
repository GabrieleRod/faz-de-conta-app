import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

import {HomeStackScreen, HistoriasStackScreen, MaisStackScreen} from './StackNavigator';

export default function BottomNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                
                let iconName;

                if (route.name === 'Home') {
                  iconName = 'ios-home';
                }
                else if (route.name === 'Historias') {
                  iconName = 'ios-book';
                }              
                else if (route.name === 'Mais') {
                  iconName = 'ios-list';
                }    
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: '#FFB366',
              inactiveTintColor: '#F2F2F2',
              style: { backgroundColor: '#007A99' }
            }}
        >
            <Tab.Screen name="Home" component={HomeStackScreen} options={{ title: 'Home' }} />
            <Tab.Screen name="Historias" component={HistoriasStackScreen} options={{ title: 'Histórias' }}/> 
            <Tab.Screen name="Mais" component={MaisStackScreen} options={{ title: 'Mais' }}/>
        </Tab.Navigator>
    );
}