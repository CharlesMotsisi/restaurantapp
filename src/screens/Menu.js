import React,{useState} from 'react'
import { StyleSheet, Text, View,ScrollView,Dimensions,TouchableOpacity ,
    Modal, FlatList,Pressable,Image} from 'react-native'
import {Icon,withBadge} from 'react-native-elements'
import {colors,parameters} from '../global/styles'
import {BurgerData,SaladsData,Drinks,Breakfast,Lunch,Dinner}from '../../src/global/data'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function Menu(){
    const BadgeIcon = withBadge(0)(Icon);
    const [indexCheck,setIndexCheck] = useState("0");
    const listTab = [
        {
            status:'Burgers'
        },
        {
            status:'Salads'
        },
        {
            status:'Drinks'
        },
        {
            status:'Breakfast'
        },
        {
            status:'Lunch'
        },
        {
            status:'Dinner'
        },

    ]
    const [dataList,setDataList] = useState(BurgerData)
    const [status, setStatus] = useState('Burgers')
    const setStatusFilter = status =>{
        if(listTab.status==='Lunch'){
            setDataList(BurgerData);
        }
      setStatus(status)  
    }
    return(
        <View style={styles.container}>
            <View style={styles.listTab}>
                {
                    listTab.map(e=>(
                        <TouchableOpacity 
                        style={[styles.btnTab,status === e.status && styles.btnTabActive]}
                        onPress={()=> setStatusFilter(e.status)}>
                            {/* <View style={{marginRight:25}}>
                                <Icon type='material-community'
                                name="home"
                                size={20}
                                color={colors.buttons}/>
                            </View> */}
                             <Text style={[styles.textTab, status===e.status && styles.btnTabActive]}>{e.status}</Text>
                             <View style={{alignItems:'center',justifyContent:'center',marginLeft:25}}>
                                <BadgeIcon type="material-community"
                                name="cart"
                                size={20}
                                color={colors.buttons}/>
                            </View>
                            
                        </TouchableOpacity>
                        
                    ))
                    
                }
        
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{marginLeft:-200}}>
                    <FlatList
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    data={dataList}
                    keyExtractor={(item)=>item.id}
                    renderItem={({item,index})=>(
                        <Pressable
                        onPress={()=>{setIndexCheck(item.id)}}
                        >
                            <View key={index} style={styles.itemContainer}>
                                <Image
                                style={{height:100,width:100,borderRadius:60}}
                                source={item.image}
                                />
                                <View>
                                    <Text style={{fontSize:12,marginTop:40,marginLeft:10,color:colors.buttons}}>{item.name}</Text>
                                </View>
                                <View>
                                    <Text style={{fontSize:12,marginTop:40,marginLeft:10,color:colors.buttons}}>{item.price}</Text>
                                </View>
                                <View style={[styles.itemStatus,{backgroundColor:item.status==='Burgers' ? "#blue" : '#lightblue'}]}>
                                    <Text>{item.status}</Text>
                                </View>
                                
                            </View>
                        </Pressable>
                    )}
                />
                </View>
                <View style={{marginLeft:100}}>
                    <FlatList
                        horizontal={false}
                        showsHorizontalScrollIndicator={false}
                        data={SaladsData}
                        keyExtractor={(item)=>item.id}
                        renderItem={({item,index})=>(
                            <Pressable
                            onPress={()=>{setIndexCheck(item.id)}}
                            >
                                <View key={index} style={styles.itemContainer}>
                                    <Image
                                    style={{height:100,width:100,borderRadius:60}}
                                    source={item.image}
                                    />
                                    <View>
                                        <Text style={{fontSize:12,marginTop:40,marginLeft:10,color:colors.buttons}}>{item.name}</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize:12,marginTop:40,marginLeft:10,color:colors.buttons}}>{item.price}</Text>
                                    </View>
                                    <View style={[styles.itemStatus,{backgroundColor:item.status==='Burgers' ? "#blue" : '#lightblue'}]}>
                                        <Text>{item.status}</Text>
                                    </View>
                                    
                                </View>
                            </Pressable>
                        )}
                    />
                </View>

                <View style={{marginLeft:125}}>
                    <FlatList
                        horizontal={false}
                        showsHorizontalScrollIndicator={false}
                        data={Drinks}
                        keyExtractor={(item)=>item.id}
                        renderItem={({item,index})=>(
                            <Pressable
                            onPress={()=>{setIndexCheck(item.id)}}
                            >
                                <View key={index} style={styles.itemContainer}>
                                    <Image
                                    style={{height:100,width:100,borderRadius:60}}
                                    source={item.image}
                                    />
                                    <View>
                                        <Text style={{fontSize:12,marginTop:40,marginLeft:10,color:colors.buttons}}>{item.name}</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize:12,marginTop:40,marginLeft:10,color:colors.buttons}}>{item.price}</Text>
                                    </View>
                                    <View style={[styles.itemStatus,{backgroundColor:item.status==='Burgers' ? "#blue" : '#lightblue'}]}>
                                        <Text>{item.status}</Text>
                                    </View>
                                    
                                </View>
                            </Pressable>
                        )}
                    />
                </View>
                <View style={{marginLeft:125}}>
                    <FlatList
                        horizontal={false}
                        showsHorizontalScrollIndicator={false}
                        data={Breakfast}
                        keyExtractor={(item)=>item.id}
                        renderItem={({item,index})=>(
                            <Pressable
                            onPress={()=>{setIndexCheck(item.id)}}
                            >
                                <View key={index} style={styles.itemContainer}>
                                    <Image
                                    style={{height:100,width:100,borderRadius:60}}
                                    source={item.image}
                                    />
                                    <View>
                                        <Text style={{fontSize:12,marginTop:40,marginLeft:10,color:colors.buttons}}>{item.name}</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize:12,marginTop:40,marginLeft:10,color:colors.buttons}}>{item.price}</Text>
                                    </View>
                                    <View style={[styles.itemStatus,{backgroundColor:item.status==='Burgers' ? "#blue" : '#lightblue'}]}>
                                        <Text>{item.status}</Text>
                                    </View>
                                    
                                </View>
                            </Pressable>
                        )}
                    />
                </View>
                <View style={{marginLeft:125}}>
                    <FlatList
                        horizontal={false}
                        showsHorizontalScrollIndicator={false}
                        data={Lunch}
                        keyExtractor={(item)=>item.id}
                        renderItem={({item,index})=>(
                            <Pressable
                            onPress={()=>{setIndexCheck(item.id)}}
                            >
                                <View key={index} style={styles.itemContainer}>
                                    <Image
                                    style={{height:100,width:100,borderRadius:60}}
                                    source={item.image}
                                    />
                                    <View>
                                        <Text style={{fontSize:12,marginTop:40,marginLeft:10,color:colors.buttons}}>{item.name}</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize:12,marginTop:40,marginLeft:10,color:colors.buttons}}>{item.price}</Text>
                                    </View>
                                    <View style={[styles.itemStatus,{backgroundColor:item.status==='Burgers' ? "#blue" : '#lightblue'}]}>
                                        <Text>{item.status}</Text>
                                    </View>
                                    
                                </View>
                            </Pressable>
                        )}
                    />
                </View>

                <View style={{marginLeft:125}}>
                    <FlatList
                        horizontal={false}
                        showsHorizontalScrollIndicator={false}
                        data={Dinner}
                        keyExtractor={(item)=>item.id}
                        renderItem={({item,index})=>(
                            <Pressable
                            onPress={()=>{setIndexCheck(item.id)}}
                            >
                                <View key={index} style={styles.itemContainer}>
                                    <Image
                                    style={{height:100,width:100,borderRadius:60}}
                                    source={item.image}
                                    />
                                    <View>
                                        <Text style={{fontSize:12,marginTop:40,marginLeft:10,color:colors.buttons}}>{item.name}</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize:12,marginTop:40,marginLeft:10,color:colors.buttons}}>{item.price}</Text>
                                    </View>
                                    <View style={[styles.itemStatus,{backgroundColor:item.status==='Burgers' ? "#blue" : '#lightblue'}]}>
                                        <Text>{item.status}</Text>
                                    </View>
                                    
                                </View>
                            </Pressable>
                        )}
                    />
                </View>
            </View>
            
            {/* <View style={styles.header}>
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
            </View> */}




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
        marginLeft:200,
    },
    header:{
        flexDirection:'row',
        backgroundColor:colors.buttons,
        height:parameters.headerHeight,
        justifyContent:'space-between',
    },
    listTab:{
        flexDirection:'row',
        alignSelf:'center',
    },
    btnTab:{
        //width:Dimensions.get('window').width/3.5,
        width:'60%',
        flexDirection:'row',
        borderWidth: 0.5,
        borderColor: colors.buttons,
        padding: 10,
        justifyContent:'center',

    },
    textTab:{
        fontSize: 16,
    },
    btnTabActive:{

    },
    textTabActive:{
        color:colors.buttons
    },
    itemContainer:{
       flexDirection:'row', 
       paddingVertical:15,
       
    },
    itemStatus:{
       backgroundColor:'#fff',
       paddingHorizontal:6,
       justifyContent:'center', 
       right: 12,
    }
})