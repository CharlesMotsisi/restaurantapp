import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import RootClientTabs from './ClientTabs';
import {Icon} from 'react-native-elements'
import {colors} from'../../src/global/styles'

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator>
            {/* <Drawer.Screen
            name="RootClientTabs"
            component={RootClientTabs}
            options={{
              title:'Client',
              drawerIcon:({focussed,size})=>{
                <Icon type='material-community'
                name='home'
                color={focussed ? '#7cc' : colors.grey5}
                size={25}/>
              }
            }}/>

        <Drawer.Screen
            name="RootClientTabs"
            component={RootClientTabs}
            options={{
              title:'Payment',
              drawerIcon:({focussed,size})=>{
                <Icon type='material-community'
                name='payment'
                color={focussed ? '#7cc' : colors.grey5}
                size={25}/>
              }
            }}/> */}
        </Drawer.Navigator>
    )
}