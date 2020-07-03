import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export class Welcomecontent extends Component {
    render() {
        return (
            <View style={styles.content}>
                <Text  style={{fontSize:20,padding:10}}>welcome to our service for yours need !!!</Text>
                <Text style={{fontSize:18,padding:10}}>STEP 1:</Text> 
                <Text style={{fontSize:13,padding:10}}>First of all Register Your details in profile Menu</Text>
                <Text style={{fontSize:18,padding:10}}>STEP 2: </Text>
                <Text style={{fontSize:13,padding:10}}>Then move to the booking menu and book the date
                and time for yours convenient</Text>
                <Text style={{fontSize:18,padding:10}}>STEP 3:</Text>
                <Text style={{fontSize:13,padding:10}}>We will given the response for your choosing time and 
                After receive our Response Please come and checkin THANK YOU...</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    content: {
        flex:1,
        width:'100%',  
    },
   
    
 
   
  });

export default Welcomecontent
