import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator,TransitionPresets,AuthStack} from '@react-navigation/stack'

export default function RootNavigator(){
    return(
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    )
}