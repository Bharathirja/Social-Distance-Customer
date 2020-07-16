import React, { Component } from 'react';
import {StyleSheet,Text,View,ScrollView,Image,TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class CustomerProfile extends Component {
  render(){
    return (
      <ScrollView style={styles.container}>
          <View style={styles.header}>
          </View>
          <Image style={styles.avatar} source={require('../assets/saravanan_sir.jpg')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
            <TouchableOpacity style={styles.edit_button}>
                <Text>Edit<Icon  size={20} name={'md-create'}></Icon></Text>  
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Name: Mr.saravanan</Text>  
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Phone Number : 875444875</Text>  
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Email : frdstomail@gmail.com</Text>  
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Address : Chennai</Text>  
              </TouchableOpacity>
                             
            </View>
        </View>
      </ScrollView>       
    );
  }
}

  const styles = StyleSheet.create({
    header:{
    //   backgroundColor: "tomato",
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    name:{
      fontSize:22,
      color:"tomato",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
    edit_button:{
        borderRadius:10,
        backgroundColor:'grey',
        padding:5
        
    }
  });
   