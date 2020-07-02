import React, { Component } from 'react';
import {StyleSheet,View,Text,Image, TouchableOpacity,Alert} from 'react-native';
import {Welcome} from '../customerapp/welcome';
import {Offer} from '../customerapp/offer';
import {Notification} from '../customerapp/notification';
import { Router,Scence,Actions} from 'react-native-router-flux';

export class Dashboard extends Component {
    render() {
        const navigation = this.props.navigation
        return (
            <View>
          <View style={styles.card}>
              <View style={styles.cardContent} >
                  <View >
                  <Image
              source={require("../assets/welcome.jpg")}
              style={{
                height: 200,
                width:373,
                borderRadius:5
                // width: 155
              }}
      
            />
              {/* onPress={() => this.props.navigation.push(<Welcome/>)}   */}

                  </View>
                  {/* <Text style={{alignContent:'center'}}>Welcome</Text> */}
              </View>
          </View>
              <View style={styles.card}>
              <View style={styles.cardContent}>
              <View>
                  <TouchableOpacity onPress={()=>Offer}>
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
                  <Image
              source={require("../assets/note1.jpg")}
              style={{
                height: 200,
                width:373,
                borderRadius:5
                // width: 155
              }}
              
            />
                  </View>
              </View>
          </View>


        <Router>
           <Scence key="root">
            <Scence key={'offer'} component={Offer}/>
            </Scence>
        </Router>

          </View>

         

          
        )

    }
  

}
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

export default Dashboard
