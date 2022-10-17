import React, {useState,useRef} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import {colors,parameters} from "../../global/styles"
import {Button, Icon,SocialIcon} from 'react-native-elements';
import Header from '../../components/header'
import { TextInput } from 'react-native-web';



import * as Animatable from 'react-native-animatable'

export default function SIgnInScreen({navigation}){

    const [textInputFocused, setTextInputFocused] = useState(false);
    const textInput1 = useRef(1)
    const textInput2 = useRef(2)
    return(
        <View style={styles.container}>
            <Header title="My Account" type="arrow-left"/>
            <View style={{marginLeft:'38%'}}>
                <Text style={styles.title}>Sign In</Text>
            </View>
            <View style={{marginLeft:'28%'}}>
                <Text style={styles.text1}>Please enter email and password</Text>   
            </View>
            <View >
                <View style={{marginTop:40,marginLeft:30,}}>
                <TextInput style={styles.TextInput1} placeholder="Email" ref ={textInput1} onFocus={()=>{
                    setTextInputFocused(false)
                }} onBlur={()=>{
                    setTextInputFocused(false)
                }}/>
                </View>

                <View style={styles.TextInput2}>
                    <Animatable.View animation={textInputFocused?"":"fadeInLeft"} duration={400}>
                        <Icon name="lock"
                        iconStyle={{color:colors.grey3}}
                        type="material"/>
                    </Animatable.View>
                         <TextInput style ={{width:'80%'}} placeholder="Password"  ref ={textInput2}/>
                    <Animatable.View animation={textInputFocused?"":"fadeInLeft"} duration={400}>
                        <Icon name="visibility-off"
                            iconStyle={{color:colors.grey3}}
                            type="material"/>
                    </Animatable.View>
                </View>
            </View>
            <View>
                <Button title="SIGN-IN"
                buttonStyle={parameters.styledButton}
                titleStyle={parameters.buttonTitle}
                style={{marginLeft:15}}
                onPress={()=>{navigation.navigate('DrawerNavigator')}}/> {/*Come back to the root*/}
            </View>
            <View style={{marginLeft:'38%', marginTop:20}}>
                <Text style={{...styles.text1,textDecorationLine:"underline"}}>Forgot password?</Text>
            </View>
            <View style={{marginLeft:'47%', marginTop:20,marginBottom:20}}>
                <Text style={{fontSize:20,fontWeight:"bold"}}>OR</Text>
            </View>
            <View style={{marginHorizontal:10,marginTop:10,marginLeft:60}}>
                <SocialIcon title='Sign In With Google'
                button
                type='google'
                style={styles.SocialIcon}
                onPress={()=>{}}/>
            </View>
            <View style={{marginLeft:'34%', marginTop:20}}>
                <Text style={{...styles.text1}}>Don't have an account?</Text>
            </View>
            <View style={{marginLeft:25,marginTop:10}}>
                <Button title="Create an Account"
                buttonStyle={styles.createButton}
                titleStyle={styles.createButtonTitle}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    title:{
        color:colors.statusbar,
        fontSize: 15,
        fontWeight:"bold",
        marginLeft:30,
        marginTop:40,
    },
    text1:{
        color:colors.grey3,
        fontSize: 13,
        marginTop:20,
    },
    TextInput1:{
        borderWidth:2,
        borderColor:"#86939e",
        marginHorizontal:20,
        borderRadius:12,
        marginBottom: 20,
        width: '80%',
        paddingLeft: 15,
        height:50,
        
    },
    TextInput2:{
        borderWidth:2,
        borderColor:"#86939e",
        marginHorizontal:20,
        borderRadius:12,
        marginBottom: 20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center",
        width: '75%',
        paddingLeft: 15,
        height:50,
        marginLeft:46,
        
    },
    SocialIcon:{
        borderRadius:12,
        height:50,
        width:"50%",
        marginLeft:"18%"

    },
    createButton:{
        backgroundColor:"white",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:"#ff8c52",
        height:40,
        paddingHorizontal:20,
        width:"30%",
        marginLeft:"32%",
        marginTop:10,
    },
    createButtonTitle:{
        color:"#ff8c52",
        fontSize:16,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop: -3
    }

})