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
import NotificationsCarousal from './NotificationsCarousal';
import OfferCarousal from './OfferCarousal';



export class Dashboard extends Component {
    constructor() {
        super();
    
      }
   
    render() {
          
        // const {navigate} =this.props.navigation;
        return (
        //     <View>
        //   <View style={styles.card}>
        //       <View style={styles.cardContent} >
        //           <View >
        //               <TouchableOpacity 
        //                onPress={()=>Actions.welcome()}>

        //               <Image
        //       source={require("../assets/welcome.jpg")}
        //       style={{
        //         height: 200,
        //         width:373,
        //         borderRadius:5
        //         // width: 155
        //       }}
      
        //     />
        //               </TouchableOpacity>
           

        //           </View>
        //       </View>
        //   </View>

        //       <View style={styles.card}>
        //       <View style={styles.cardContent}>
        //       <View>
        
        //           <OfferCarousal/>
           
        //           </View>
        //       </View>
        //   </View>

          
        //   <View style={styles.card}>
        //       <View style={styles.cardContent}>
        //       <View>
         
        //     <NotificationsCarousal/>
            
                 
        //           </View>
        //       </View>
        //   </View>


       

        //   </View>
        <View style={styles.container}>
           <View style={styles.welcome}>
               <View style={styles.welcontent}>
               <Text style={{fontSize:40}}>GoodMorning!!!</Text>
               </View>
               <View style={styles.namecontent}>
                   <Text style={{fontSize:25}}>Mr.saravanan</Text>
               </View>
               <View style={styles.infocontent}>
               <Text style={{fontSize:20}}>Our offer was almost reasonable. </Text>
               </View>
           </View>
           <View style={styles.offers}>
                 <OfferCarousal/>

           </View>
           <View style={styles.notifications}>
           <NotificationsCarousal/>

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
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    welcome:{
        flex:4,
        backgroundColor:'#4444ff',
        width:'100%',
        // justifyContent:'center',
        // alignItems:'center',
        
    },
    offers:{
        flex:3,
        marginTop:10,
        padding:10




    },
    notifications:{
        flex:3,
        marginTop:10,
        padding:10




    },
    welcontent:{
        flex:1,
        padding:10
    },
    namecontent:{
        flex:1,
        marginLeft:200

    },
    infocontent:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },

    // card:{
    //     padding:20,
    //     borderRadius:6,
    //     elevation:3,
    //     backgroundColor:'#fff',
    //     shadowOffset:{width:1,height:1},
    //     shadowColor:'#333',
    //     shadowOpacity:0.3,
    //     alignItems:'center',
    //     margin:12,
    //     height:200,
    //     justifyContent:'center',
    //     shadowRadius:2,
      
    // },
    // cardContent:{
    //     marginHorizontal:10,
    //     backgroundColor:'blue',


        
    // }

  

});
// export default createAppContainer(AppNavigator);
export default Dashboard
// const AppContainer = createAppContainer(Stack);
// export default class Apps extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }
