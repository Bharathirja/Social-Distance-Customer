import 'react-native-gesture-handler';
import React,{Component,useState} from 'react';
import icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { View,
    Text
    ,StyleSheet,
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
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from 'react-native-modal-datetime-picker'
import {Menutabscreen} from '../customerapp/menutabscreen'
// import Animated from 'react-native-reanimated'
import { YellowBox } from 'react-native';
import moment from 'moment';
import BookingHistory from './BookingHistory';
import { MaterialIcons } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
// import { Modal } from 'react-native-paper';


import BookingTime from '../customerapp/bookingTime'

YellowBox.ignoreWarnings([
  'Require cycle:'
])



function HomeScreen(){
    
    return (
      <Dashboard />
    )

}



// export class Book extends Component{
//     constructor(){
//         super()
//         this.state = {
//             isVisible:false,
//             chosenDate: '',
//         }

//     }
// handlePicker = (datetime)=>{
//     this.setState({
//         isVisible:false,
//         chosenDate:moment(datetime).format('MMMM, Do YYYY HH:mm')

//     })
// }

// hidePicker = (datetime) =>{
//     this.setState({
//         isVisible:false,
//     })
// }

// showPicker = ()=>{
//     this.setState({
//         isVisible:true
//     })
// }

//    render(){

//         return (
//             <View  style={styles.DateTimePicker}>
//                 <Text style={{color:'red',fontSize:20,marginBottom:10}}>
//                     {this.state.chosenDate}
//                 </Text>
//                 <TouchableOpacity style={styles.Button} onPress={this.showPicker}>
//                     <Text style={styles.text}>Show DateTimePicker</Text>
//                 </TouchableOpacity>
//                 <DateTimePicker
//                  isVisible={this.state.isVisible}
//                  onConfirm={this.handlePicker}
//                  onCancel={this.hidePicker}
//                  mode={'datetime'}
//                  is24Hour={true}
                
//                 />

//             </View>
         
//         );
    
// }
// }


//model popup for add booking



  function Book(){
      const [modalOpen, setModelOpen] = useState(false);
    
        return (
            <View style={styles.booking_notification}>
            <View style={{flex:5,marginBottom:350}}>
            <Text>notification 1 </Text>
            <Text>notification 2 </Text>
            </View>
            <View style={{flex:3}}>
               <View style={{marginLeft:140,flexDirection:'row',alignItems:'center'}}>
                    <Text style={{marginRight:5}}>New Book Here</Text>
                  {/* <Icon style={{color:'green'}} size={50} name={'md-add'}></Icon> */}
                  <MaterialIcons
                  name='add'
                  size={50}
                  style={styles.modalToggle}
                  onPress={()=>setModelOpen(true)}
                  />
              </View>
            </View>


       <Modal visible={modalOpen} animationType='slide'>
           <View style={StyleSheet.modalcontent}>
           
               <View>
               <MaterialIcons
                  name='close'
                  size={30}
                  style={styles.modalCloseToggle}
                  onPress={()=>setModelOpen(false)}
                  />
               </View>

               <BookingTime/>
           </View>
       
       </Modal>
       </View>

  
         
        );
    
}



const { width } = Dimensions.get("window");

export class BookingScreen extends Component {
    state = {
        active: 0,
        xTabOne: 0,
        xTabTwo: 0,
        translateX: new Animated.Value(0),
        translateXTabOne: new Animated.Value(0),
        translateXTabTwo: new Animated.Value(width),
        translateY: -1000
    };

    handleSlide = type => {
        let {
            active,
            xTabOne,
            xTabTwo,
            translateX,
            translateXTabOne,
            translateXTabTwo
        } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 100
        }).start();
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    duration: 100
                }).start()
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -width,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    duration: 100
                }).start()
            ]);
        }
    };

    render() {
        let {
            xTabOne,
            xTabTwo,
            translateX,
            active,
            translateXTabOne,
            translateXTabTwo,
            translateY
        } = this.state;
        return (
            <View style={{ flex: 1,height:"90%" }}>
                <View
                    style={{
                        width: "90%",
                        marginLeft: "auto",
                        marginRight: "auto",
                        // height:"100%",
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 20,
                            marginBottom: 20,
                            height: 36,
                            position: "relative",
                        }}
                    >
                        <Animated.View
                            style={{
                                position: "absolute",
                                width: "50%",
                                height: "100%",
                                top: 0,
                                left: 0,
                                backgroundColor: "#007aff",
                                borderRadius: 4,
                                transform: [
                                    {
                                        translateX
                                    }
                                ]
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: "#007aff",
                                borderRadius: 4,
                                borderRightWidth: 0,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabOne: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 0 }, () =>
                                    this.handleSlide(xTabOne)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 0 ? "#fff" : "#007aff"
                                }}
                            >
                                New booking
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: "#007aff",
                                borderRadius: 4,
                                borderLeftWidth: 0,
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabTwo: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 1 }, () =>
                                    this.handleSlide(xTabTwo)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 1 ? "#fff" : "#007aff"
                                }}
                            >
                                Booking history
                            </Text>
                        </TouchableOpacity>
                    </View>

 
                {/* new booking and booking history */}

                    <ScrollView > 
                        <Animated.View
                            style={{
                                // justifyContent: "center",
                                // alignItems: "center",
                                transform: [
                                    {
                                        translateX: translateXTabOne
                                    }
                                ]
                            }}
                            onLayout={event =>
                                this.setState({
                                    translateY: event.nativeEvent.layout.height
                                })
                            }
                        >
                             <View style={{marginTop: 20 }}> 
                                 <Book/> 
                                
                            </View> 
                            
                        </Animated.View> 

                        <Animated.View
                            style={{
                                // justifyContent: "center",
                                // alignItems: "center",
                                transform: [
                                    {
                                        translateX: translateXTabTwo
                                    },
                                    {
                                        translateY: -translateY
                                    }
                                ]
                            }}
                        >
                            <View > 
                                {/* <Image
                                    source={require("../../images/client2.png")}
                                    style={{
                                        width: 30,
                                        height: 30,
                                        borderRadius: 15
                                    }}
                                /> */}
                            {/* <Text>History details</Text> */}
                            <BookingHistory/>

                            </View>
                        </Animated.View> 
                    </ScrollView>
                </View>
            </View>
        );
    }
 
}

        
    


function ProfileScreen () {

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
                            <Text style={styles.btntext} >Register</Text>
                </TouchableOpacity>

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
    DateTimePicker:{
        // flex:1,
        // justifyContent:'center',
        // alignItems:'center',
        // marginTop:300,


    }, regform:{
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

    datetime:{
        color:'red'
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

    }

    //historycontainer

 


})

const Tab = createMaterialBottomTabNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
          barStyle={{ backgroundColor: '#694fad' }}
        >
          <Tab.Screen name="Home" component={HomeScreen}  options= 
          {{tabBarIcon:({tintColor})=>(
              <View>
                  <Icon style={[{color:tintColor}]} size={25} name={'md-home'}></Icon>

              </View>
          ),}} />
          <Tab.Screen name="Booking" component={BookingScreen} options=
           {{tabBarIcon:({tintColor})=>(
            <View >
                <Icon style={[{color:tintColor}]} size={25} name={'md-calendar'} ></Icon>
                
            </View>
        ),}}  />
          <Tab.Screen name="Profile" component={ProfileScreen} options=
          {{tabBarIcon:({tintColor})=>(
            <View>
                <Icon style={[{color:tintColor}]} size={25} name={'md-person'}></Icon>

            </View>
        ),}}/>
          <Tab.Screen name="Help" component={AboutScreen} options=
          {{tabBarIcon:({tintColor})=>(
            <View>
                <Icon style={[{color:tintColor}]} size={25} name={'md-help'}></Icon>

            </View>
        ),}}/>

        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  

// export default createAppContainer(Tab);
