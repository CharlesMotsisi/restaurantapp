import React from 'react'
import {View,Text,StyleSheet,TextInput} from 'react-native' //delete
import { NavigationContainer } from '@react-navigation/native' //delete

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {colors} from '../global/styles' 
import {Icon, Tab} from 'react-native-elements'
import HomeScreen from '../screens/HomeScreen';


const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs(){
    return(
        <></>
        /*<ClientTabs.Navigator
            tabBarOptions={{
                activeTintColor: colors.buttons
            }}
        >
            <ClientTabs.Screen
            name="HomeScreen"
            component={HomeScreen}
            options = {{
                tabBarLabel: "Home",
                tabBarIcon :({color,size})=>(
                    <Icon
                    name='home'
                    type='material'
                    color={color}
                    size={size}
                    />
                )
            }}
            />

            
        </ClientTabs.Navigator>*/
    )
} 