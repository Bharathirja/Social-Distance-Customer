import React, {useState}from 'react';
import { StyleSheet, Text, View, Button,TextInput,} from 'react-native';
import Login from './customerapp/Login';
import Listscroll from './reactnative-tut/listscroll'
import Inlinestyle from './reactnative-tut/inlinestyle';
import Otpscreen from './customerapp/otpscreen';
// import Navigator from '../routes/homestack';
import {Router, Scene,ActionConst,Tabs} from 'react-native-router-flux';
import Registerscreen from './customerapp/registerscreen';
import Menutabscreen from './customerapp/menutabscreen';
import Homeprofile from './customerapp/homeprofile';
import Offer from './customerapp/offer';
import Welcome from './customerapp/welcome';
import Notification  from './customerapp/notification';
import BookingScreen from './customerapp/bookingscreen'

export default function App() {
  const[mobno,setMobno] = useState('');

 
  return (
 

    <View style={[styles.container,{flex:1}]}> 
     <Router >
      <Scene key="root" navigationBarStyle={{ backgroundColor: '#4444ff' }}>
              

        <Scene
        key="login"
        component={Login}
        // title="login"
        initial
        type={ActionConst.RESET}
        hideNavBar={true}


        />

        <Scene
        key="otpscreen"
        component={Otpscreen}
        type={ActionConst.RESET}
        hideNavBar={true} 
      
        />  

        <Scene
        key="registrationform"
        component={Registerscreen}
        title="RegistrationForm"
        /> 

        <Scene
        key="menu"
        component={Homeprofile}
        // title='Home'
        // renderBackButton={()=>(null)}
        renderLeftButton={()=>(null)}

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
