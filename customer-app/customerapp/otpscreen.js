import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native'

export class otpscreen extends Component {

    componentDidMount=()=>{
        this.refs.pin1ref.focus()
        
    }
    constructor(props){
        super(props)
        this.state={
            pin1:"",
            pin2:"",
            pin3:"",
            pin4:"",
        }
    }
    render() {
        const {pin1,pin2,pin3,pin4}=this.state
     
        return (
           <View style={{flex:1}}>

               <View style={{flex:0.6,justifyContent:"space-evenly",flexDirection:'row'}}>
                   <TextInput
                   ref={"pin1ref"}
                   maxLength={1}
                   value={pin1}
                   onChangeText={(pin1)=>{
                       this.setState({pin1:pin1})
                       if(pin1 !=""){
                           this.refs.pin2ref.focus()
                       }
                    }}
                   style={{backgroundColor:'white',justifyContent:"center", fontWeight:'600',alignSelf:"center", textAlign:'center', alignContent:'center',alignItems:'center',fontSize:20,height:55,width:'10%',borderRadius:10, borderWidth:0.5,borderColor:'grey'}}
                   />
                   <TextInput
                   ref={"pin2ref"}
                   maxLength={1}
                   value={pin2}
                   onChangeText={(pin2)=>{this.setState({pin2:pin2})
                   if(this.pin2!=""){
                       this.refs.pin3ref.focus()
                   }
                }}
            
                   style={{backgroundColor:'white',fontWeight:'600',alignSelf:"center",fontSize:20,height:55,width:'10%',borderWidth:0.5,borderRadius:10,borderColor:'grey',textAlign:'center', alignContent:'center',alignItems:'center',}}
                   />
                   <TextInput
                   ref={"pin3ref"}
                   maxLength={1}
                   value={pin3}
                   onChangeText={(pin3)=>{
                       this.setState({pin3:pin3})
                       if(this.pin3!=""){
                           this.refs.pin4ref.focus()

                       }
                }}
                   style={{backgroundColor:'white',fontWeight:'600',alignSelf:"center",fontSize:20,height:55,width:'10%',borderWidth:0.5,borderRadius:10, borderColor:'grey',textAlign:'center', alignContent:'center',alignItems:'center',}}
                   />
                   <TextInput
                   ref={"pin4ref"}
                   maxLength={1}
                   value={pin4}
                   onChangeText={(pin4)=>{
                       this.setState({pin4:pin4})
                       if(this.pin4!=""){
                           alert("otp registration successful")
                       }
                    }}
                   style={{backgroundColor:'white',fontWeight:'600',alignSelf:"center",fontSize:20,height:55,width:'10%',borderWidth:0.5,borderRadius:10, borderColor:'grey',textAlign:'center', alignContent:'center',alignItems:'center',}}
                   />
               </View>
               

           </View>
        )
    }
}

export default otpscreen
