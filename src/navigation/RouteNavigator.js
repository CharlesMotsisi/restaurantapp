import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator,TransitionPresets,AuthStack} from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import SIgnInScreen from '../screens/authScreens/SignInScreen';

//const Stack = createBottomTabNavigator();

export default function RootNavigator(){
    return(
        <NavigationContainer>
            {/*<AuthStack/>*/}
            {/*
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown:false,
                        ...TransitionPresets.RevealFromBottomAndroid
                    }}
                />
                <Stack.Screen name="SIgnInScreen" component={SIgnInScreen}
                options={{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }} />
            </Stack.Navigator>*/}
        </NavigationContainer>
    )
}