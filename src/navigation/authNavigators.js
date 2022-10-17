import React from  'react'
import {createStackNavigator,TransitionPresets} from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import RootClientTabs from './ClientTabs';
import RestaurantMapScreen from '../screens/restaurantMapScreen';
import DrawerNavigator from './DrawerNavigator';

const Auth = createStackNavigator();

export default function AuthStack(){
    return(
        <Auth.Navigator>
            {/* <Auth.Screen
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
            name="DrawerNavigator"
            component={DrawerNavigator}
            options={{
                headerShown:false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}/>

        <Auth.Screen
            name="RestaurantMapScreen"
            component={RestaurantMapScreen}
            options={{
                headerShown:false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}/> */}
        </Auth.Navigator>
        
    )
}