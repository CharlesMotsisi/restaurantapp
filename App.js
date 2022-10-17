import React from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { colors } from './src/global/styles';
import SiginInScreen from "./src/screens/authScreens/SignInScreen";
import HomeScreen from './src/screens/HomeScreen';
import RootClientTabs from './src/navigation/ClientTabs'
import RootNavigator from './src/navigation/RouteNavigator';
import BurgersMenu from './src/screens/BurgersMenu';


export default function App(){
  return(
    <View style = {styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor= {colors.statusbar}/>
         <BurgersMenu/>
        {/* <RootNavigator/> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex:1}
})