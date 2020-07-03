import React, { Component } from 'react';
import 'react-native-gesture-handler';
import {StyleSheet,View,Text,Image, TouchableOpacity,Alert} from 'react-native';
import Welcome from '../customerapp/welcome';
import Offer from '../customerapp/offer';
import Notification from '../customerapp/notification';
import { createAppContainer, } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from 'react-navigation';
import { createStackNavigator} from '@react-navigation/stack';
// import { StackNavigator } from "react-navigation";
import {Actions} from "react-native-router-flux";
import BookingScreen from './homeprofile';



export class Dashboard extends Component {
    constructor() {
        super();
    
      }
   
    render() {
          
        // const {navigate} =this.props.navigation;
        return (
            <View>
          <View style={styles.card}>
              <View style={styles.cardContent} >
                  <View >
                      <TouchableOpacity 
                       onPress={()=>Actions.welcome()}>

                      <Image
              source={require("../assets/welcome.jpg")}
              style={{
                height: 200,
                width:373,
                borderRadius:5
                // width: 155
              }}
      
            />
                      </TouchableOpacity>
           
              {/* onPress={() => this.props.navigation.push(<Welcome/>)}   */}

                  </View>
                  {/* <Text style={{alignContent:'center'}}>Welcome</Text> */}
              </View>
          </View>
              <View style={styles.card}>
              <View style={styles.cardContent}>
              <View>
                  <TouchableOpacity 
                   onPress={()=>Actions.offer()}>
                  <Image
              source={require("../assets/onlyoffer.jpg")}
              style={{
                height: 200,
                width:373,
                borderRadius:5
                // width: 155
              }}
            />
                  </TouchableOpacity>
           
                  </View>
              </View>
          </View>
          <View style={styles.card}>
              <View style={styles.cardContent}>
              <View>
                  <TouchableOpacity  onPress={()=>Actions.booking()}>
                  <Image
              source={require("../assets/note1.jpg")}
              style={{
                height: 200,
                width:373,
                borderRadius:5
                // width: 155
              }}
              
            />
                  </TouchableOpacity>
                 
                  </View>
              </View>
          </View>


       

          </View>
        )

    }
    
  

}


// const AppNavigator  = createStackNavigator({
    // offer: { screen: Offer},
    // SecondPage: { screen: SecondPage},

//   });

//   const Stack = createStackNavigator();
  
  
//   function App() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="offer" component={Offer} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
  

const styles = StyleSheet.create({

    card:{
        padding:20,
        borderRadius:6,
        elevation:3,
        backgroundColor:'#fff',
        shadowOffset:{width:1,height:1},
        shadowColor:'#333',
        shadowOpacity:0.3,
        alignItems:'center',
        margin:12,
        height:200,
        justifyContent:'center',
        shadowRadius:2,
        // marginHorizontal:10,
        // marginVertical:6,
    },
    cardContent:{
        // marginVertical:70,
        marginHorizontal:10,

        
    }

});
// export default createAppContainer(AppNavigator);
export default Dashboard
// const AppContainer = createAppContainer(Stack);
// export default class Apps extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }
