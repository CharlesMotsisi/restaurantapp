import React, { useState } from "react";
import {View,Text,StyleSheet,TextInput,TouchableOpacity,FlatList,Pressable,
Image,Modal} from 'react-native'
import {Icon} from 'react-native-elements'
import HomeHeader from "../components/HomeHeader";
import {colors,parameters} from '../global/styles';
import {filterData,filterData2,filterRestaurant} from '../global/data';
import { color } from "react-native-elements/dist/helpers";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';

const ClientTabs = createBottomTabNavigator();

export default function HomeScreen({navigation}){
    const [indexCheck,setIndexCheck] = useState("0");
    const [modalVisible,setModalVisible] = useState(false)

    const menuPressed = ()=>{
        setModalVisible(true);
        console.log('Picture Pressed')
    }

    return(
        <View style={styles.container}>
           <HomeHeader/>  
           <View style={styles.search}>
             <Icon name="search" type="material" />
             <TextInput type="text" placeholder="Search by category"/>
            </View>

            <View style={styles.categoryCont}>
                <Text style={styles.textCategory}>Category</Text>
            </View>
            
            <View>
                <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                    style={{marginTop:20}}
                    data={filterData}
                    keyExtractor={(item)=>item.id}
                    extraData={indexCheck}
                    renderItem={({item,index})=>(
                        <Pressable
                        onPress={()=>{setIndexCheck(item.id)}}
                        >
                            <View style={indexCheck===item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
                                <Image
                                style={{height:60,width:60,borderRadius:60}}
                                source={item.image}
                                
                                />
                                <View>
                                    <Text style={indexCheck===item.id ? {...styles.smallCardSelected}:
                                       {...styles.smallCardText}}>{item.name}</Text>
                                </View>
                            </View>
                        </Pressable>
                    )}
                />
            </View>

            <View>
                <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                    style={{marginTop:20}}
                    data={filterData2}
                    keyExtractor={(item)=>item.id}
                    extraData={indexCheck}
                    renderItem={({item,index})=>(
                        <Pressable
                        onPress={()=>{setIndexCheck(item.id)}}
                        >
                            <View style={indexCheck===item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
                                <Image
                                style={{height:60,width:60,borderRadius:60}}
                                source={item.image}
                                />
                                <View>
                                    <Text style={indexCheck===item.id ? {...styles.smallCardSelected}:
                                       {...styles.smallCardText}}>{item.name}</Text>
                                </View>
                            </View>
                        </Pressable>
                    )}
                />
            </View>
            <View style={styles.categoryCont}>
                <Text style={styles.textCategory}>Working Hours</Text>
            </View>

            <View style={styles.workingHrs}>
                <View style={styles.captions}>
                    <Text style={{fontSize:14,fontWeight:'bold',marginLeft:50}}>DAYS</Text>
                    <Text style={{fontSize:14,fontWeight:'bold'}}>OPEN</Text>
                    <Text style={{fontSize:14,fontWeight:'bold',marginRight:50}}>CLOSE</Text>
                </View>
                <View style={styles.duration}>
                    <View style={styles.days}>
                        <Text style={{fontSize:13}}>Monday-Friday</Text>
                        <Text style={{fontSize:13}}>Saturday</Text>
                        <Text style={{fontSize:13}}>Sunday</Text>
                    </View>
                    <View style={styles.openHrs}>
                        <Text style={{fontSize:13}}>07:00 AM</Text>
                        <Text style={{fontSize:13}}>07:30 AM</Text>
                        <Text style={{fontSize:13}}>08:30 AM</Text>
                    </View>
                    <View style={styles.closeHrs}>
                        <Text style={{fontSize:13}}>21:00 PM</Text>
                        <Text style={{fontSize:13}}>19:30 PM</Text>
                        <Text style={{fontSize:13}}>17:00 PM</Text>
                    </View>
                </View>
            </View>
            <View style={styles.categoryCont}>
                <Text style={styles.textCategory}>Location</Text>
            </View>
            <View >
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                        style={{marginTop:20}}
                        data={filterRestaurant}
                        keyExtractor={(item)=>item.id}
                        extraData={indexCheck}
                        renderItem={({item,index})=>(
                            <View onPress={menuPressed}>
                                <Image
                                style={{height:120,width:120,borderRadius:20,
                                marginRight:20}}
                                source={item.image}/>
                            </View>
                        )}
                />
            </View>
            <View style={{marginTop:10}}>
                <Text style={{fontSize:11.5,fontStyle:'italic',marginLeft:130}}>20 MorogoroRd, Esiqongeni{"\n"}
                Johannesburg 1632</Text>
            </View>
            <View style={styles.floatButton}>
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('RestaurantMapScreen')
                }}
                >
                    <Icon name="place"
                    type="material"
                    size={32}
                    color = {colors.buttons}
                    />
                    <Text style={{color:colors.grey2}}>Map</Text>
                </TouchableOpacity>
            </View>
            {/* <Modal visible={modalVisible} animationType="slide">
            <Icon name="arrow-left"
                    type="material"
                    size={32}
                    color = {colors.buttons}
                    onPress={()=>setModalVisible(false)}
                    />
            </Modal> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        /*justifyContent:'center',
        alignItems:'center',*/
    },
    search:{
        height:40,
        width:'50%',
        backgroundColor:'#fff',
        marginTop:35,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:'27%',
        borderWidth:2,
        borderColor:'#ff8c52',
        borderRadius:25,
        flexDirection:'row',
        
    },
    categoryCont:{
        alignItems:'center',
        backgroundColor:colors.grey5,
        marginTop:40,
        
    },
    textCategory:{
        fontWeight:'bold',
        fontSize:20,
        fontStyle:'italic',
        color:colors.statusbar,
    },
    smallCard:{
        borderRadius:30,
        backgroundColor:colors.grey5,
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        width:80,
        margin:10,
        height:100,
    },
    smallCardSelected:{
        borderRadius:30,
        backgroundColor:colors.buttons,
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        width:80,
        margin:10,
        height:100,  
    },
    smallCardTextSelected:{
        fontWeight:'bold',
        color:colors.cardbackground,
    },
    smallCardText:{
        fontWeight:'bold',
        color:colors.grey2,
    },
    captions:{
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop:10,
        
    },
    duration:{
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop:10,
    },
    days:{
        marginLeft:20,
    },
    openHrs:{
        marginRight:20,
    },
    closeHrs:{
        marginRight:40,
    },
    floatButton:{
        position: 'absolute',
        bottom:10,
        right:15,
        backgroundColor:'white',
        elevation:10,
        width:60,
        height:60,
        borderRadius: 30,
        alignItems:'center',
    }
    
})