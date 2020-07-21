import 'react-native-gesture-handler';
import React,{Component,useState} from 'react';
import icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Button,
    Animated,
    ScrollView,
    Image,
    Dimensions,
    Modal,
} from 'react-native';
import Dashboard from '../customerapp/dashboard';
import NotificationsCarousal from './NotificationsCarousal';
import { YellowBox } from 'react-native';
import moment from 'moment';
import BookingHistory from './BookingHistory';
import { MaterialIcons } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
import { Card } from 'react-native-elements'
import BookingTab from './BookingTab'
import BookingModel from './BookingModel'
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomerProfile from './CustomerProfile';
import { Title } from 'react-native-paper';






import BookingTime from '../customerapp/bookingTime'

YellowBox.ignoreWarnings([
  'Require cycle:'
])



function HomeScreen(){
    
    return (
     
      <Dashboard />
    )

}



function BookingScreen(){

    return(
      
        <View style={styles.booking_container}>
                <View style={{
                height:'10%',
                backgroundColor:'tomato',
                width:'100%',
                justifyContent:'center',
                padding:10,
                // alignItems:'center'
                }}>
                <Title style={{marginTop:25}}>Booking</Title>
        </View>
            <View style={styles.booking_tab}>
                <BookingTab/>
            </View>
            <View style={styles.booking_add}>
                        <BookingModel/>
            </View>
        </View>

    )

}

        
    


// function ProfileScreen () {

//         return (
//             <View style={styles.regform}> 
//             <Text style={styles.header}>Enter Your Details for registration</Text>
//             <TextInput style={styles.textinput} placeholder = 'Your name'
//              underlineColorAndroid={'transparent'}/>
// <TextInput style={styles.textinput} placeholder = 'Mobile number'
//              underlineColorAndroid={'transparent'}/>
//              <TextInput style={styles.textinput} placeholder = 'Email'
//              underlineColorAndroid={'transparent'}/>
//              <TextInput style={styles.textinput} placeholder = 'Address'
//              underlineColorAndroid={'transparent'}/>
//                 <TouchableOpacity style={styles.Button} onPress={()=>Actions.otpscreen()}>
//                             <Text style={styles.btntext} >Register</Text>
//                 </TouchableOpacity>

// </View> 
         
//         )
    
// }

function ProfileScreen () {

    return (
            <CustomerProfile/>
    )

}


function AboutScreen(){
    
        return (
            <View style={styles.container}>
                <View style={{height:'10%',backgroundColor:'tomato',width:'100%',justifyContent:'center',padding:10,}}>
                <Title style={{marginTop:25}}>About</Title>
                </View>
                <View>
                    <Text style={{paddingLeft:35,marginTop:10}}>
                        In 2017 we started,We are the leading experts in that service, we are done and doing so many
                        services for everyone who needs our Help
                    </Text>
                    <Text style={{paddingLeft:35,marginTop:10}}>
                     we are give the best for you and also we done in a correct time for your need
                    </Text>
                    <Text style={{paddingLeft:35,marginTop:10}}>
                     If you have any struggle during registration or any other trouble kindly contact us 8754444875
                    </Text>
                    <Text style={{paddingLeft:35,marginTop:10}}>
                     Thank you  
                    </Text>


                </View>

            </View>
         
        )
    
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
        // alignSelf:'stretch',
        // alignItems:'center',
        // padding:20,
        // backgroundColor:'#59cbbd',
        // marginTop:30,
        width:250,
        height:50,
        backgroundColor:'#330066',
        borderRadius:30,
        justifyContent:'center',
        marginTop:15
    },
    btntext:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:20,
    },

    text:{
        fontSize:18,
        color:'white',
        textAlign:'center',

    },

    //animated view

    //new booking

    booking_notification:{
    },

    modalToggle:{
        borderWidth:3,
        borderColor:'#5085ff',
        padding:12,
        borderRadius:40,
        alignSelf:'center',
        color:'#1c56db',
     
    },
    modalCloseToggle:{
        borderWidth:3,
        borderColor:'#5085ff',
        padding:12,
        borderRadius:40,
        alignSelf:'center',
        color:'#1c56db',
        marginTop:2,

    },

    booking_container:{
        flex:1,
     
    },
    booking_tab:{
        flex:8
    },
    booking_add:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'blue',

    },
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
    }


 


})

const AppTabs = createBottomTabNavigator();
const AppTabsScreen=()=> (
    
        <AppTabs.Navigator
          initialRouteName="Home"
          barStyle={{ backgroundColor: 'tomato' }}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'white',
            style: {
                backgroundColor: '#694fad',
              },

              labelStyle: {        
                fontSize: 12,        
               }    
          }}
       
        
       
        >
        <AppTabs.Screen 
            component={HomeScreen}
            name="Home"
     
            
            options={{
              
            headerBackTitle: null,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
                <Icon   size={25} color={color} name={'md-home'}></Icon>
            ),
           

        
        }}
        />

          <AppTabs.Screen 
          name="Booking" 
          component={BookingScreen} 
     options={{
                title:'Home',
                tabBarLabel: 'Booking',
                tabBarIcon: ({ color }) => (
                    <Icon  size={25} color={color} name={'md-calendar'}></Icon>

                ),
                }} 
               
                />

          <AppTabs.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{
            tabBarLabel: 'Profile',
            headerStyle: {
                backgroundColor: 'red',
              },
            tabBarIcon: ({ color }) => (
                <Icon  size={25}  color={color} name={'md-person'}></Icon>

            ),
            }}
        />

          <AppTabs.Screen 
          name="About" 
          component={AboutScreen}
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color }) => (
                <Icon  size={25}  color={color} name={'md-help'}></Icon>

            ),
            }}
        />

        </AppTabs.Navigator>
        )

    export default ()=>(
        <NavigationContainer>
        <AppTabsScreen/>
    </NavigationContainer>
    )
    
    
  
  

