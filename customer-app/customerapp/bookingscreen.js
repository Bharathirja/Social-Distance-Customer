
import 'react-native-gesture-handler';
import React, {Component} from 'react';
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
} from 'react-native';
import {Dashboard} from '../customerapp/dashboard'
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from 'react-native-modal-datetime-picker'
import {Menutabscreen} from '../customerapp/menutabscreen'
import BookingHistory from './BookingHistory'




export class Book extends Component{
    constructor(){
        super()
        this.state = {
            // isVisible:false
        }

    }
// handlePicker = ()=>{
//     this.setState({
//         isVisible:false

//     })
// }

// hidePicker = () =>{
//     this.setState({
//         isVisible:false
//     })
// }

// showPicker = ()=>{
//     this.setState({
//         isVisible:true
//     })
// }

   render(){

        return (
            <View  style={styles.container}>
                {/* <TouchableOpacity style={styles.Button} onPress={this.showPicker}>
                    <Text>Show DateTimePicker</Text>
                </TouchableOpacity>
                <DateTimePicker
                 
                 isVisible={this.state.isVisible}
                 onConfirm={this.handlePicker}
                 onCancel={this.hidePicker}
                
                /> */}

            </View>
         
        );
    
}
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
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        width: "90%",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 40,
                            marginBottom: 20,
                            height: 36,
                            position: "relative"
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

                    <ScrollView>
                        <Animated.View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
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
                            <View style={{ marginTop: 20 }}>
                            <Text>choose date for booking</Text>
                                <Book/>
                            </View>
                        </Animated.View> 

                        <Animated.View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
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
                            <View style={{ marginTop: 20 }}>
                                {/* <Image
                                    source={require("../../images/client2.png")}
                                    style={{
                                        width: 30,
                                        height: 30,
                                        borderRadius: 15
                                    }}
                                /> */}
                            <Text>History details</Text>

                            </View>
                        </Animated.View> 
                    </ScrollView>
                </View>
            </View>
        );
    }
 
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',


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
        alignSelf:'stretch',
        alignItems:'center',
        padding:20,
        backgroundColor:'#59cbbd',
        marginTop:30,
    },
    btntext:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:20,



    } 
})


export default BookingScreen