import React, { Component } from 'react'
import { StyleSheet,Text, View,TextInput,TouchableOpacity,StatusBar } from 'react-native'
import {Actions} from 'react-native-router-flux'


export class Loginform extends Component {
    render() {
        return (
            <View style={styles.container}>
 
                  <Text style={styles.header}>Login</Text>
                <TextInput style={styles.input}
                    placeholder = 'mobile number'
                    keyboardType='numeric' underlineColorAndroid={'transparent'}
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={()=>Actions.otpscreen()}>
                     <Text style={styles.buttonText}>GO</Text>
                </TouchableOpacity>
               
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        padding:20
    },
    header:{
            fontSize:24,
            color:'#fff',
            paddingBottom:10,
            marginBottom:40,
            borderBottomColor:'#f8f8f8',
            borderBottomWidth:1,
        },
        input:{
            height:40,
            backgroundColor:'rgba(255,255,255,0.2)',
            color:'#FFF',
            alignSelf:'stretch',
            height:40,
            marginBottom:30,
            // borderBottomColor:'#f8f8f8',
            // borderBottomWidth:1,
            paddingHorizontal:10,


        },
        buttonContainer:{
            backgroundColor:'#2980b9',
            paddingVertical:15,
        },
        buttonText:{
            textAlign:'center',
            color:'#FFFFFF',
            fontWeight:'700',
        }



});

export default Loginform
