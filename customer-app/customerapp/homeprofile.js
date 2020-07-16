import 'react-native-gesture-handler';
import React,{Component,useState} from 'react';
import icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
        <View> 
            <CustomerProfile/>

        </View> 
     
    )

}


function AboutScreen(){
    
        return (
            <View style={{  justifyContent: 'center', }}>
                <Text style={{fontSize:20,paddingLeft:5}}>About Us</Text>
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

    }


 


})

const Tab = createBottomTabNavigator();
export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          barStyle={{ backgroundColor: 'tomato' }}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'white',
            style: {
                backgroundColor: '#694fad',
              }
          }}
        >
        <Tab.Screen 
            name="HomeScreen" 
            component={HomeScreen} 
                options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <Icon   size={25} color={color} name={'md-home'}></Icon>
                ),
                
                }}
        />

          <Tab.Screen 
          name="BookingScreen" 
          component={BookingScreen} 
     options={{
                tabBarLabel: 'Booking',
                tabBarIcon: ({ color }) => (
                    <Icon  size={25} color={color} name={'md-calendar'}></Icon>

                ),
                }}  />

          <Tab.Screen 
          name="ProfileScreen" 
          component={ProfileScreen} 
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
                <Icon  size={25}  color={color} name={'md-person'}></Icon>

            ),
            }}
        />

          <Tab.Screen 
          name="AboutScreen" 
          component={AboutScreen}
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color }) => (
                <Icon  size={25}  color={color} name={'md-help'}></Icon>

            ),
            }}
        />

        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  

// export default createAppContainer(Tab);
