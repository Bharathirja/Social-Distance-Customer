import React, { Component } from 'react'
import {StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export class registerscreen extends Component {
    render() {
        return (
<View style={styles.regform}> 
            <Text style={styles.header}>Enter Your Details for registration</Text>
            <TextInput style={styles.textinput} placeholder = 'Your name'
             underlineColorAndroid={'transparent'}/>
<TextInput style={styles.textinput} placeholder = 'Mobile number'
             underlineColorAndroid={'transparent'}/>
             <TextInput style={styles.textinput} placeholder = 'Email'
             underlineColorAndroid={'transparent'}/>
             <TextInput style={styles.textinput} placeholder = 'Address'
             underlineColorAndroid={'transparent'}/>
                <TouchableOpacity style={styles.Button} onPress={()=>Actions.otpscreen()}>
                            <Text style={styles.btntext} >Sign up</Text>
                </TouchableOpacity>

</View>                
        )
    }
}

const styles = StyleSheet.create({
    regform:{
        alignSelf:'stretch',
        padding:20,   flex: 1,
        backgroundColor: '#4169e1',
        justifyContent: 'center',
    },
    header:{
        fontSize:20,
        color:'#fff',
        paddingBottom:10,
        marginBottom:40,
        borderBottomColor:'#199187',
        borderBottomWidth:1,
         
    },
    textinput:{
        alignSelf:'stretch',
        height:40,
        marginBottom:30,
        color:'#fff',
        borderBottomColor:'#f8f8f8',
        borderBottomWidth:1,
    },
    Button:{
        alignSelf:'stretch',
        alignItems:'center',
        padding:20,
        backgroundColor:'#59cbbd',
        marginTop:30,
    },
    btntext:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:20,



    } 

});

export default registerscreen
