import React, {useState}from 'react';
import { StyleSheet, Text, View, Button,TextInput, } from 'react-native';
import Login from './customerapp/Login';
import Listscroll from './reactnative-tut/listscroll'
import Inlinestyle from './reactnative-tut/inlinestyle';
import Otpscreen from './customerapp/otpscreen';
// import Navigator from '../routes/homestack';
import {Router, Scene} from 'react-native-router-flux';
import Registerscreen from './customerapp/registerscreen';
import Menutabscreen from './customerapp/menutabscreen';
import Homeprofile from './customerapp/homeprofile';
import Offer from './customerapp/offer';
import Welcome from './customerapp/welcome';
import Notification  from './customerapp/notification';
import BookingScreen from './customerapp/bookingscreen'

export default function App() {
  // const[name,setName] = useState('pappugroup');
  // const[person,setPerson] = useState({name:'covid',age:19});

  // const clickHandler =()=>{
  //   setName('PG analytics');
  //   setPerson({name:"anandh",age:26})

  // }
  return (
    <View style={[styles.container,{flex:1}]}> 
     <Router>
      <Scene key="root">

        <Scene
        key="login"
        component={Login}
        title="login"
        initial
        />

        <Scene
        key="otpscreen"
        component={Otpscreen}
        title="otp registration"
        />  
             <Scene
        key="registrationform"
        component={Registerscreen}
        title="RegistrationForm"
        /> 
                <Scene
        key="menu"
        component={Homeprofile}
        // title="Home"
        /> 

<Scene
        key="menutab"
        component={Menutabscreen}
        title="tab"
        /> 
           <Scene
        key="offer"
        component={Offer}
        // title="Home"
        /> 
                <Scene
        key="welcome"
        component={Welcome}
        // title="Home"
        /> 
                <Scene
        key="notification"
        component={Notification}
        // title="Home"
        /> 

<Scene
        key="booking"
        component={BookingScreen}
        // title="Home"
        /> 


      </Scene>

   


    </Router>

    {/* <Navigator/> */}
    {/* <Otpscreen/>  */}
    {/* <Login/> */}
    {/* <Listscroll/> */}
    {/* <Inlinestyle/> */}
      {/* <Text style={styles.boldtext}>My companyname is {name}</Text>
  <Text>employeee name  is {person.name} and age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clickHandler}/>

      </View>
      <Text style={styles.titleText}>Enter your mobilenumber:</Text>
      <TextInput style={styles.input} placeholder="Mobile Number" keyboardType='numeric ' onChangeText={(val)=>setName(val)}/>

      <Text style={styles.titleText}>Enter your mobilenumber:</Text>
      <TextInput style={styles.input} placeholder="Mobile Number" onChangeText={(val)=>setName(val)}/> */}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // // paddingLeft: 60,
    // paddingRight: 60,

    // alignItems: 'center',
    // borderColor:'white',
    // marginTop: 50,
  },
  // buttonContainer:{
  //   marginTop:20
  // },
  // input:{
  //   borderWidth:1,
  //   borderColor:'#777',
  //   padding:8,
  //   margin:10,
  //   width:250,
  //   borderColor:"white"

  // },
  // titleText: {
  //   fontSize: 20,
  // },
 
});
