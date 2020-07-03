import React, { Component } from 'react'
import { StyleSheet, 
    Text, 
    View, 
    Button,
    TextInput,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView} from 'react-native';
import {Actions} from 'react-native-router-flux'
import Loginform from './loginform';

export class Login extends Component {
    render() {
        return (
           
            // <View style={[styles.container]}>
            //     <View style={styles.title}>
            //         <Text style={{color:'white',fontSize:20}}>PG Analytics</Text>
            //     </View>
            // <View style={styles.login}>
            //     <Text style={styles.header}>Login</Text>
            //     <TextInput style={styles.textinput} placeholder = 'your mobile number' selectionColor='white'
            //    keyboardType='numeric' underlineColorAndroid={'transparent'}/>
            //     <TouchableOpacity style={styles.Button} onPress={()=>Actions.otpscreen()}>
            //                 <Text style={styles.btntext} >GO</Text>
            //     </TouchableOpacity>
            //     </View>
            //     </View>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                    style={styles.logo}
                         source={require ('../assets/octocat.png')}
                        />
                        <Text style={styles.title}>PG Analytics</Text>

                </View>
                <View style={styles.formContainer}>
                    <Loginform/>

                </View>


            </View>
        
        )
    }
}

const styles = StyleSheet.create({
    // container:{
    // flex: 1,
    // backgroundColor: '#4169e1',
    // justifyContent: 'center',
    // },
    // title:{
    //     height:'10%',
    //     width:'100%',
    //     padding:40,
    //     justifyContent:"center",
    //     alignItems:"center",
    //     fontSize:40,
    //     color:'white',
    //     // backgroundColor:'red',
    //     fontWeight:'bold'
        
        

    // },
    // login: {
    //   alignSelf:'stretch',
    //   padding:20

   
    // },
    // header:{
    //     fontSize:24,
    //     color:'#fff',
    //     paddingBottom:10,
    //     marginBottom:40,
    //     borderBottomColor:'#f8f8f8',
    //     borderBottomWidth:1,
    // },
    // textinput:{
    //     alignSelf:'stretch',
    //     height:40,
    //     marginBottom:30,
    //     color:'#fff',
    //     borderBottomColor:'#f8f8f8',
    //     borderBottomWidth:1,
        


    // },
    // Button:{
    //     alignSelf:'stretch',
    //     alignItems:'center',
    //     padding:20,
    //     backgroundColor:'#59cbbd',
    //     marginTop:30,
    // },
    // btntext:{ 
    //     color:'#fff',
    //     fontWeight:'bold',


    // }

    container:{
        flex:1,
        backgroundColor:'#3498db',
      

    },
    logoContainer:{
    justifyContent:'center',
    alignItems:'center',
    flexGrow:1,
    },
    logo:{
        width:100,
        height:100
    },
    title:{
        color:'#FFF',
        marginTop:10,
        textAlign:'center',
        opacity:0.9,
        fontSize:15
    }
  
});

export default Login
