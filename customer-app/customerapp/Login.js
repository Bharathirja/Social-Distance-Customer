// import React, { Component } from 'react'
// import { StyleSheet, 
//     Text, 
//     View, 
//     Button,
//     TextInput,
//     TouchableOpacity,
//     Image,
//     KeyboardAvoidingView} from 'react-native';
// import {Actions} from 'react-native-router-flux'
// import Loginform from './loginform';

// export class Login extends Component {
//     render() {
//         return (
           
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
//             <View style={styles.container}>
//                 <View style={styles.logoContainer}>
//                     <Image
//                     style={styles.logo}
//                          source={require ('../assets/octocat.png')}
//                         />
//                         <Text style={styles.title}>PG Analytics</Text>

//                 </View>
//                 <View style={styles.formContainer}>
//                     <Loginform/>

//                 </View>


//             </View>
        
//         )
//     }
// }

// const styles = StyleSheet.create({
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

//     container:{
//         flex:1,
//         backgroundColor:'#3498db',
      

//     },
//     logoContainer:{
//     justifyContent:'center',
//     alignItems:'center',
//     flexGrow:1,
//     },
//     logo:{
//         width:100,
//         height:100
//     },
//     title:{
//         color:'#FFF',
//         marginTop:10,
//         textAlign:'center',
//         opacity:0.9,
//         fontSize:15
//     }
  
// });

// export default Login


import React,{Component} from 'react';
import { Text, View, StyleSheet, Image, TextInput,TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import {Actions} from 'react-native-router-flux'
import CustomFontsProvider, {useCustomFont} from "react-native-custom-fonts";

export default class Login extends Component {
  
  constructor(){
    super();
    this.state={
      error:''
    }
  }
  render(){
    return (
      <View style={styles.container}>

        <View style={styles.app_details}>

          <View style={styles.app_name_image_quote}>
            <Text style={styles.text}>
              Welcome
            </Text>
          </View>

          <View style={styles.app_name_image_quote}>
            <Image source={require('../assets/octocat.png')} style={styles.image} />
          </View>

          <View style={styles.app_name_image_quote}>
            <Text style={styles.text}>
                PG Analytics
            </Text>
          </View>

        </View>

        <View style={styles.login}>

          <View style={styles.login_inputs}>
            <Text style={{fontSize:18}}>
              Enter your mobile number here
            </Text>
          </View>

          <View style={styles.login_inputs}>
            <TextInput 
              style={styles.textinput} 
              placeholder='Enter mobile number :'
              />
            
          </View>
          <View style={styles.enter}>
          <TouchableOpacity style={styles.buttonContainer} onPress={()=>Actions.otpscreen()}>
                     <Text style={styles.buttonText}>GO</Text>
                </TouchableOpacity>
              </View>
     

          {/* <View style={styles.login_inputs}>
            <Text style={{color:"#22bb22"}}>
              {this.state.error}
            </Text>
          </View> */}

        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:1
  },
  app_details:{
    flex:7,
    backgroundColor:'#4444ff'
  },
  app_name_image_quote:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    color:'white',
    fontSize:25,
    // fontFamily:'lucida grande'
  },
  login:{
    flex:3,
    backgroundColor:'#f1f1f1'
  },
  login_inputs:{
    flex:1,
    justifyContent:'center',
    paddingLeft:20
  },
  textinput:{
    height:30,
    width:180,
    fontSize:18
  },
  image:{
    height:140
  },
  buttonContainer:{
    backgroundColor:'#2980b9',
    paddingVertical:15,
    width:351
},
buttonText:{
    textAlign:'center',
    color:'#FFFFFF',
    fontWeight:'700',
},
enter:{
    flex:1,
    justifyContent:'center',
    // alignItems:'center',
    paddingLeft:20

}
});


