// import React, { Component } from 'react'
// import { View, TextInput, Text,StyleSheet} from 'react-native'
// import {Actions} from 'react-native-router-flux'


// export class otpscreen extends Component {

//     componentDidMount=()=>{
//         this.refs.pin1ref.focus()
        
//     }
//     constructor(props){
//         super(props)
//         this.state={
//             pin1:"",
//             pin2:"",
//             pin3:"",
//             pin4:"",
//         }
//     }
//     render() {
//         const {pin1,pin2,pin3,pin4}=this.state
     
//         return (
//            <View style={styles.container}>
//               <View style={{width: '100%',marginTop:10}}>
//      <Text style={{width: '100%',textAlign: 'center'}} >Enter Your OTP Number</Text>
// </View>
//                <View style={{flex:0.6,justifyContent:"space-evenly",flexDirection:'row',marginBottom:100}}>
//                    <TextInput
//                    ref={"pin1ref"}
//                    maxLength={1}
//                    value={pin1}
//                    onChangeText={(pin1)=>{
//                        this.setState({pin1:pin1})
//                        if(pin1 !=""){
//                            this.refs.pin2ref.focus()
//                        }
//                     }}
//                    style={{backgroundColor:'white',justifyContent:"center", fontWeight:'600',alignSelf:"center", textAlign:'center', alignContent:'center',alignItems:'center',fontSize:20,height:55,width:'10%',borderRadius:10, borderWidth:0.5,borderColor:'grey'}}
//                    />
//                    <TextInput
//                    ref={"pin2ref"}
//                    maxLength={1}
//                    value={pin2}
//                    onChangeText={(pin2)=>{this.setState({pin2:pin2})
//                    if(this.pin2!=""){
//                        this.refs.pin3ref.focus()
//                    }
//                 }}
            
//                    style={{backgroundColor:'white',fontWeight:'600',alignSelf:"center",fontSize:20,height:55,width:'10%',borderWidth:0.5,borderRadius:10,borderColor:'grey',textAlign:'center', alignContent:'center',alignItems:'center',}}
//                    />
//                    <TextInput
//                    ref={"pin3ref"}
//                    maxLength={1}
//                    value={pin3}
//                    onChangeText={(pin3)=>{
//                        this.setState({pin3:pin3})
//                        if(this.pin3!=""){
//                            this.refs.pin4ref.focus()

//                        }
//                 }}
//                    style={{backgroundColor:'white',fontWeight:'600',alignSelf:"center",fontSize:20,height:55,width:'10%',borderWidth:0.5,borderRadius:10, borderColor:'grey',textAlign:'center', alignContent:'center',alignItems:'center',}}
//                    />
//                    <TextInput
//                    ref={"pin4ref"}
//                    maxLength={1}
//                    value={pin4}
//                    onChangeText={(pin4)=>{
//                        this.setState({pin4:pin4})
//                        if(this.pin4!=""){
//                            alert("otp registration successful")
//                            this.props.navigation.push('menu');
//                         //    {()=>Actions.registrationform()}
//                        }
//                     }}
//                    style={{backgroundColor:'white',fontWeight:'600',alignSelf:"center",fontSize:20,height:55,width:'10%',borderWidth:0.5,borderRadius:10, borderColor:'grey',textAlign:'center', alignContent:'center',alignItems:'center',}}
//                    />
//                </View>
               

//            </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         marginTop:200
     

//     },
// });

// export default otpscreen

import React, { Component } from 'react'
import { View, TextInput, Text,StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';


export default class App extends Component {
  constructor(){
    super();
    this.state={
      mobile_number:'+91 8072199808',
      pin1:"",
      pin2:"",
      pin3:"",
      pin4:"",
    }
  }
  render(){
    const {pin1,pin2,pin3,pin4}=this.state

    return(
      <ScrollView>
      <View style={styles.container}>

        <View style={styles.otpscreen}>

          <View style={styles.text}>

            <View style={{alignItems:'center',justifyContent:'flex-end'}}>
              <Text style={{fontSize:20,fontWeight:'bold'}}>
                Enter your verification code
              </Text>
            </View>

            <View style={{alignItems:'center',justifyContent:'center',justifyContent:'flex-end'}}>
              <Text 
                style={{
                  color:'grey',
                //   fontFamily:'Arial',
                  fontSize:12,
                  paddingBottom:3,
                  marginTop:10
                }}
              >
                We have sent you a 4 digit verification code on
              </Text>
              <Text style={{fontSize:20,paddingTop:3}}>
                {this.state.mobile_number}
              </Text>
            </View>
          </View>

          <View style={styles.otp}>

            <View style={styles.textinput}>

              <TextInput
               keyboardType = 'numeric'
                ref={"pin1ref"}
                maxLength={1}
                value={pin1}
                onChangeText={(pin1)=>{
                    this.setState({pin1:pin1})
                    if(pin1 !=""){
                        this.refs.pin2ref.focus()
                    }
                  }}
                style={styles.otpnumber}
              />

              <TextInput
              keyboardType = 'numeric'
                ref={"pin2ref"}
                maxLength={1}
                value={pin2}
                onChangeText={(pin2)=>{this.setState({pin2:pin2})
                if(this.pin2!=""){
                    this.refs.pin3ref.focus()
                }
              }}
          
                style={styles.otpnumber}
              />

              <TextInput
               keyboardType = 'numeric'
                ref={"pin3ref"}
                maxLength={1}
                value={pin3}
                onChangeText={(pin3)=>{
                    this.setState({pin3:pin3})
                    if(this.pin3!=""){
                        this.refs.pin4ref.focus()
                      }
              }}
                style={styles.otpnumber}
              />

              <TextInput
               keyboardType = 'numeric'
                ref={"pin4ref"}
                maxLength={1}
                value={pin4}
                onChangeText={(pin4)=>{
                    this.setState({pin4:pin4})
                    if(this.pin4!=""){
                        alert("otp registration successful")
                        this.props.navigation.push('menu');
                        //    {()=>Actions.registrationform()}
                    }
                  }}
                style={styles.otpnumber}
              />

            </View>

            <View style={{marginTop:10,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:20}}>0.27</Text>
            </View>

          </View>

        </View>
        {/* <View style={{flex:4}}>
        </View> */}
      </View>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fcfcfc'
    
  },
  otpscreen:{
    // flex:1,
    marginTop:100
  },
  text:{
  },
  otp:{
    marginTop:10
  },
  textinput:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginHorizontal: 40,
    },
  otpnumber:{
    height:50,
    width:50,
    fontSize:25,
    alignSelf:"center",
    textAlign:'center',
    borderRadius:10,
    borderWidth:0.5,
    borderColor:'grey'
  }
});

