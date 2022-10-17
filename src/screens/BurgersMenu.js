import React,{useState} from 'react'
import { StyleSheet, Text, View,ScrollView,Dimensions,TouchableOpacity ,
    Modal, FlatList,Pressable,Image} from 'react-native'
import {Icon,withBadge} from 'react-native-elements'
import {colors,parameters} from '../global/styles'
import {BurgerData}from '../../src/global/data'


export default function BurgersMenu(){
    const BadgeIcon = withBadge(0)(Icon);
    const [indexCheck,setIndexCheck] = useState("0");
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontSize:20,fontWeight:'bold',marginLeft:'35%',marginTop:5}}>BURGERS</Text>
                <View style={{alignItems:'center',justifyContent:'center',marginRight:15}}>
                    <BadgeIcon type="material-community"
                    name="cart"
                    size={35}
                    color={colors.cardbackground}/>
                </View>
            </View>
            <View>
                <FlatList 
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                        style={{marginTop:20}}
                        data={BurgerData}
                        keyExtractor={(item)=>item.id}
                        extraData={indexCheck}
                        renderItem={({item,index})=>(
                            <Pressable
                            onPress={()=>{setIndexCheck(item.id)}}
                            >
                                <View style={{alignItems:'center',flexDirection:'column',justifyContent:'space-around'}}>
                                    <Image
                                    style={{height:100,width:100,borderRadius:60}}
                                    source={item.image}
                                    />
                                    <View>
                                        <Text style={{fontSize:12,color:colors.buttons}}>{item.name}</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize:12,color:colors.buttons}}>{item.price}</Text>
                                    </View>
                                    
                                </View>
                            </Pressable>
                        )}
                    />
            </View>




            {/* <TouchableOpacity>
                <View style={styles.view11}>
                    <View style={styles.view12}>
                        <Text style={styles.text13}>View Cart</Text>
                        <View style={styles.view13}>
                            <Text style={styles.text14}>0</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        flexDirection:'row',
        backgroundColor:colors.buttons,
        height:parameters.headerHeight,
        justifyContent:'space-between',
    },
})