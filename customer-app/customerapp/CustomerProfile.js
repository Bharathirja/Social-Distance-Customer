import React, { Component } from 'react';
import {StyleSheet,
        Text,
        View,
        ScrollView,
        Image,
        TouchableOpacity, 
        Button,
        Modal,
        TouchableHighlight,
        TextInput,
        } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { Card } from 'react-native-elements'
import { Input,label } from 'react-native-elements';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'






export default class CustomerProfile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isVisible: false,
      state:false,
      name:'saravanan',
      phonenumber:'875444875',
      email:'frdstomail@gmail.com',
      address:'chennai',  

    }
  }


  render(){
    const {name,phonenumber,email,address}= this.state
    return (
      <ScrollView style={styles.container}>
          <View style={styles.header}>
          </View>
          <Image style={styles.avatar} source={require('../assets/saravanan_sir.jpg')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
            <TouchableOpacity style={styles.edit_button} onPress = {() => {this.setState({ isVisible: true})}}>
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

      {/* customer_edit_model     */}
        </View>
        
        <Modal 
        animationType = {"none"} 
        transparent = {true}
        visible = {this.state.isVisible}
        onRequestClose = {() =>{ console.log("Modal has been closed.") } }>
            {/*All views of Modal*/}
            {/*Animation can be slide, slide, none*/}
          {/* <View style={{
            width: 300,
            height: 200,
            backgroundColor:'white',
            marginTop:70,
            margin:45,
            borderRadius:10,
            padding:5
          }}
            > */}
            <View style={{flex:1}}>
             <Card
            title='Edit your profile'
            containerStyle={{
                      height:480,
                      width:300,
                      marginTop:70,margin:45,
                      padding:15,
                      borderColor:'blue',
                      borderRadius:20,
                      marginLeft:47,
                      borderWidth:2,
                      
                    }}
            >

            <View style={{flex:10}}>
                            <Text style={styles.label}>Name</Text>
                            <TextInput 
                                style = {styles.input}
                                underlineColorAndroid = "transparent"
                                autoCapitalize = "none"
                                value={name}
                                editable={true}
                            />
                            <Text>MobileNumber</Text>


                                <TextInput style = {styles.input}
                                underlineColorAndroid = "transparent"
                                value={phonenumber}
                                placeholderTextColor = "#9a73ef"
                                autoCapitalize = "none"
                                maxLength={50}
                                editable={true}
                                />

                            <Text>Email</Text>
                                
                                <TextInput style = {styles.input}
                                underlineColorAndroid = "transparent"
                                value={email}
                                placeholderTextColor = "#9a73ef"
                                autoCapitalize = "none"
                                maxLength={50}
                                editable={true}
                                />
                            
                              <Text>Address</Text>
                                <TextInput style = {styles.input}
                                underlineColorAndroid = "transparent"
                                value={address}
                                placeholderTextColor = "#9a73ef"
                                autoCapitalize = "none"
                                maxLength={40}
                                />
                             

           <View style={{flex:10,justifyContent:'center',
                        alignItems:'center',marginTop:30,
                        flexDirection:'row',
                        justifyContent:'flex-end',
                        }}>
                <TouchableOpacity
                  style={{...styles.add_button,marginRight:5,backgroundColor:"#6699ff"}}
                >
              <Text style={styles.textStyle}>submit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  // onPress = {()=>this.setState({isVisible:false})} 
                  style={{...styles.add_button,backgroundColor:'#ffcc99'}}
                >
                  <Text style={styles.textStyle}>close</Text>
                </TouchableOpacity>
            </View>
          </View>

             

        </Card>
        
        </View>

        </Modal>

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
        
    },
   
    input: {
      marginTop:15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1,
      padding:5,
      width:264,
   },
   add_button:{
    height:35,
    width:50,
    backgroundColor:'green',
    alignItems:'center',
    borderRadius:5,
    marginTop:10,
    justifyContent:'center',
    alignItems:'center'
   }

 

  });
   