import React from  'react'
import {createStackNavigator,TransitionPresets} from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import RootClientTabs from './ClientTabs';

const Auth = createStackNavigator();

export default function AuthStack(){
    return(
        <Auth.Navigator>
            <Auth.Screen
            name=""
            component=""
            options={{
                headerShown:false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}/>

        <Auth.Screen
            name=""
            component=""
            options={{
                headerShown:false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}/>

        <Auth.Screen
            name="RootClientTabs"
            component={RootClientTabs}
            options={{
                headerShown:false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}/>
        </Auth.Navigator>
        
    )
}