import React from  'react'
import {createStackNavigator,TransitionPresets} from '@react-navigation/stack'
import Home from '../screens/HomeScreen';
import RootClientTabs from './ClientTabs';
import RestaurantMapScreen from '../screens/restaurantMapScreen';
import DrawerNavigator from './DrawerNavigator';
import Menu from '../screens/Menu';
import { createAppContainer } from 'react-navigation';

const screens ={
    Home:{
        screen:Home
    },
    Menu:{
        screen:Menu
    },


 }

 const Auth = createStackNavigator(screens);

 export default createAppContainer(Auth);

// export default function AuthStack(){
//     return(
//         <Auth.Navigator>
//             {/* <Auth.Screen
//             name=""
//             component=""
//             options={{
//                 headerShown:false,
//                 ...TransitionPresets.RevealFromBottomAndroid
//             }}/>

//         <Auth.Screen
//             name=""
//             component=""
//             options={{
//                 headerShown:false,
//                 ...TransitionPresets.RevealFromBottomAndroid
//             }}/>

//         <Auth.Screen
//             name="DrawerNavigator"
//             component={DrawerNavigator}
//             options={{
//                 headerShown:false,
//                 ...TransitionPresets.RevealFromBottomAndroid
//             }}/>

//         <Auth.Screen
//             name="RestaurantMapScreen"
//             component={RestaurantMapScreen}
//             options={{
//                 headerShown:false,
//                 ...TransitionPresets.RevealFromBottomAndroid
//             }}/> */}
//         </Auth.Navigator>
        
//     )
// }