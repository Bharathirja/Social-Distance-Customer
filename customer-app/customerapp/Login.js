import React,{Component} from 'react';
import { Text, View, StyleSheet, Image, TextInput,TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import {Actions} from 'react-native-router-flux'
import CustomFontsProvider, {useCustomFont} from "react-native-custom-fonts";
import Icon from 'react-native-vector-icons/Ionicons';


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
            <View style={styles.inputContainer}>
            <Text style={styles.prefix}>+91</Text>
            <TextInput 
              style={styles.textinput} 
              keyboardType="numeric"
              underlineColorAndroid={'transparent'}

              />
            </View>
           
          </View>
          <View style={styles.submit}>
          <TouchableOpacity style={styles.login_arrow} onPress={()=>Actions.otpscreen()}>
                <Icon  size={25}  name={'md-arrow-forward'}></Icon>

                </TouchableOpacity>
              </View>
        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  inputContainer:{
    flexDirection:'row'
  },
  prefix: {
    fontWeight: 'bold',
    color: 'grey',
    justifyContent:'center',
    fontSize:20,
    borderBottomWidth:1,
    marginLeft:5

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
    paddingLeft:20,
    // flexDirection:'row',
  },
  textinput:{
    height:30,
    width:180,
    fontSize:18,
    borderBottomWidth:1,
    padding:5,
    width:300,
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
submit:{
    flex:1,
    justifyContent:'center',
    // alignItems:'center',
    paddingLeft:20,
    alignItems:'center'

},
login_arrow:{
  height:50,
  width:50,
  backgroundColor:'#4444ff',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:35,
}
});


// import React,{Component} from 'react';
// import { Text, View, ScrollView, StyleSheet, Image, TextInput, Button, AsyncStorage,TouchableOpacity, Dimensions } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
// import OTP from './OTP';

// const height = Dimensions.get('window').height

// export default class Mobile_Number extends Component {
//   constructor(){
//     super();
//     this.state={
//       error:'',
//       mobile_Number:''
//     }
//   }

//   storeData = async () => {
//     try {
//       if(this.state.mobile_Number.length === 10 ){
//         await AsyncStorage.setItem('mobile_Number', this.state.mobile_Number);
//         this.props.navigation.navigate('OTP');
//       }
//       else{
//         alert('Enter valid Mobile Number');
//       }

//     } catch (e) {
//       alert(e)
//     }
//   }

//   /*
//   getData(){
//       try {
//         const value = AsyncStorage.getItem(
//           'heightFull',
//           height
//         );
//         this.props.navigation.navigate('Index')
//       } catch (error) {
//         alert('Error sending OTP')
//       }
//   }
//   */

//   render(){
//     /*
//     const { navigation } = this.props;

//     If we don't use this.props in navigation then, we should add the above line
//     under the render
//     */

//     return (
//       <ScrollView>

//       <View style={styles.container}>

//         <View style={styles.app_details}>

//           <View style={styles.app_name_image_quote}>
//             <Text style={styles.text}>
//               Booking
//             </Text>
//           </View>

//           <View style={styles.app_name_image_quote}>
//             <Image source={require('../Images/tiger.png')} style={styles.image} />
//           </View>

//           <View style={styles.app_name_image_quote}>
//             <Text style={styles.text}>
//               Keep Social Distance
//             </Text>

//           </View>

//         </View>

//         <View style={styles.login}>

//           <View style={[ styles.login_inputs, {justifyContent:'center'} ]} >
//             <Text style={{fontFamily:'Arial',fontSize:18}}>
//               Enter your Mobile Number:
//             </Text>
//           </View>

//           <View style={styles.login_inputs}>
//             <View style={{flex:1,flexDirection:'column',}}>

//               <View style={{flexDirection:'row'}}>

//                 <View style={styles.txtinput}>
//                   <Text style={{fontSize:18,color:'grey'}}>
//                     +91
//                   </Text>
//                 </View>
                
//                 <TextInput 
//                   style={styles.textinput}
//                   keyboardType={'numeric'}
//                   maxLength={10}
//                   onChangeText={text => this.setState({
//                     mobile_Number:text
//                   })}
//                   //autoFocus={true}
//                   //underlineColorAndroid={'transparent'}
//                 />

//               </View>
//               <View style={{height:1,backgroundColor:'darkgrey'}}></View>

//             </View>
//           </View>

//           <View style={styles.submit}>
//             <TouchableOpacity style={styles.send} onPress={ this.storeData }>
//               <AntDesign name="arrowright" size={30} color="white" />
//             </TouchableOpacity>
//           </View>

//         </View>

//       </View>

//       </ScrollView>
//     );
//   }

// }

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     height
//   },
//   app_details:{
//     flex:7,
//     backgroundColor:'#4444ff'
//   },
//   app_name_image_quote:{
//     flex:1,
//     alignItems:'center',
//     justifyContent:'center'
//   },
//   text:{
//     color:'white',
//     fontSize:25,
//     fontFamily:'Arial'
//   },
//   image:{
//     height:140,
//     width:160,
//   },
//   login:{
//     flex:3,
//     backgroundColor:'f1f1f1'
//   },
//   login_inputs:{
//     flex:1,
//     paddingHorizontal:20
//   },
//   txtinput:{
//     flex:1,
//     height:35,
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   textinput:{
//     flex:6,
//     height:35,
//     width:180,
//     fontSize:18,
//   },
//   submit:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   send:{
//     height:50,
//     width:50,
//     backgroundColor:'#4444ff',
//     alignItems:'center',
//     justifyContent:'center',
//     borderRadius:35,
//   }
// });