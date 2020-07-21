import React, { Component } from 'react';
import {StyleSheet,
        Text,
        View,
        ScrollView,
        Image,
        TouchableOpacity, 
        Modal,
        TouchableHighlight,
        TextInput,
        Alert,
        } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { Card } from 'react-native-elements'
// import { Input,label } from 'react-native-elements';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { Title } from 'react-native-paper';
import { Container, Button, Content, Form, Item, Input, Label } from 'native-base';







export default class CustomerProfile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      showsubmit:false,
      inputedit:false,
      isVisible: false,
      // state:false,
      name:'saravanan',
      phonenumber:'875444875',
      email:'frdstomail@gmail.com',
      address:'30,linkuproad\nmaduvinkarai,chennai,600032',  
    }
    this.editForm = this.editForm.bind(this)
    this.submit = this.submit.bind(this)
  }

  

  
  editForm(){
    if(this.state.name !==''||this.state.phonenumber!==''||this.state.email!==''||this.state.address!=='')
    {
        this.setState({inputedit:true})
        this.setState({showsubmit:true})
    }else
    {
        return
    }
  }
  submit(){
    Alert.alert('edited successfully')
  }



  render(){
    return (
      // <ScrollView style={styles.container}>
      //     <View style={styles.header}>
      //     <Image style={styles.avatar} source={require('../assets/saravanan_sir.jpg')}/>
      //     </View>
      //     <View style={styles.body}>
      //       <View style={styles.bodyContent}>
      //       <TouchableOpacity style={styles.edit_button} onPress = {() =>this.inputEditable}>
      //       <Icon  size={20} name={'md-create'}></Icon>
      //         </TouchableOpacity>
      //         <TouchableOpacity style={styles.buttonContainer}>
      //           <Text style={{flexDirection:'row'}}>Name:</Text>  
      //         </TouchableOpacity>
      //         <TouchableOpacity style={styles.buttonContainer}>
      //           <Text>Phone Number : 875444875</Text>  
      //         </TouchableOpacity>
      //         <TouchableOpacity style={styles.buttonContainer}>
      //           <Text>Email : frdstomail@gmail.com</Text>  
      //         </TouchableOpacity>
      //         <TouchableOpacity style={styles.address_container}>
      //           <Text>Address :30,linkup road</Text>
      //           <Text>maduvinkari</Text>  
      //           <Text>Chennai</Text>  
      //         </TouchableOpacity>
                             
      //       </View>

      //   </View>
      // </ScrollView>   
      
    <View style={styles.container}>
      <View style={{
                height:'10%',
                backgroundColor:'tomato',
                width:'100%',
                justifyContent:'center',
                padding:10,
                // alignItems:'center'
                }}>
                <Title style={{marginTop:25}}>Profile</Title>
        </View>
        <View style={styles.profile_container}>
          <View style={styles.image_container}>
          <Image style={styles.image} source={require('../assets/saravanan_sir.jpg')}/>
          </View>
          <View style={styles.image_upload_icon}>
            <Icon  size={48} color={'blue'} name={'md-camera'} style={{color:"grey"}}></Icon>
          </View>
          <View style={styles.edit_container}
          >
           <Icon style={styles.edit_Icon} size={25} name={'md-create'} onPress={()=>{this.editForm()}}></Icon>
          </View>
          <View style={styles.input_container}>
          <Content>
          <Form>
            <Item stackedLabel>
              <Label style={styles.label} >Name</Label>
              <Input editable={this.state.inputedit}  value={this.state.name}
              ref={"nameref"}/>
            </Item>
            <Item stackedLabel >
              <Label style={styles.label} >Phone number</Label>
              <Input editable={this.state.inputedit} value={this.state.phonenumber}
              keyboardType='numeric'/>
            </Item>
            <Item stackedLabel >
              <Label style={styles.label} >Email</Label>
              <Input editable={this.state.inputedit} value={this.state.email}/>
            </Item>
            <Item stackedLabel >
              <Label style={styles.label}>Address</Label>
              <Input multiline={true} editable={this.state.inputedit} value={this.state.address}/>
            </Item>
          </Form>
          </Content>
          </View>
          <View style={styles.footer_view}>
          {this.state.showsubmit?(
              <Button 
              primary 
              style={{borderRadius:15,height:38,padding:10}}
            
              onPress={()=>this.submit()}
              >
                <Text style={{color:'white'}}> Submit</Text>
                </Button>):null}
        
      
          </View>

        </View>

    </View>



    );
  }
}


  const styles = StyleSheet.create({

    container:{
      flex:1,
    },
    profile_container:{
      flex:1,
    },
    image_container:{
        flex:1,
        alignSelf:'center',
        justifyContent:'center',
    },
    image:{
      width:130,
      height:130,
      borderRadius:100,
      borderColor:'tomato',
      borderWidth:4,
    },
    image_upload_icon:{
      flex:1,
      position:'absolute',
      width:60,
      height:60,
      right:'34%',
      top:'14%',
      alignItems:'center',
      justifyContent:'center',

    },
    input_container:{
      flex:2,

    },
    label:{
      color:'blue',
    },
    edit_container:{
      padding:20,
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'center',
    },

    edit_Icon:{
      // padding:6,
      backgroundColor:'tomato',
        marginRight:25,
        width:40,
        height:40,
        borderRadius:30,
        textAlign:'center',
        lineHeight:40
    },

    footer_view:{
      // backgroundColor:'red',
      flex:1,
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
    }
   
    // image_view:{
    //   padding:10,

    // },
    // image:{
    //   width: 130,
    //   height: 130,
    //   borderRadius: 63,
    //   borderWidth: 4,
    //   borderColor: "white",
    //   // alignSelf:'center',

    // },
    // edit_button:{
    //   borderRadius:10,
    //   backgroundColor:'grey',
    //   padding:5,
    //   width:40,
    //   alignItems:'center',
    //   height:30,

    // },
  







  //   header:{
  //     flex:2,
  //   //   backgroundColor: "tomato",
  //     // height:200,
  //   },
    // avatar: {
    //   width: 130,
    //   height: 130,
    //   borderRadius: 63,
    //   borderWidth: 4,
    //   borderColor: "white",
    //   marginBottom:10,
    //   alignSelf:'center',
    //   position: 'absolute',
    //   marginTop:75
    // },
  //   name:{
  //     fontSize:22,
  //     color:"tomato",
  //     fontWeight:'600',
  //   },
  //   body:{
  //     // position:'absolute'

  //   },
  //   bodyContent: {
  //     flex: 1,
  //     alignItems: 'center',
  //     padding:30,
  //   },
  //   buttonContainer: {
  //     flex:1,
  //     marginTop:10,
  //     height:45,
  //     flexDirection: 'row',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     marginBottom:20,
  //     width:250,
  //     borderRadius:30,
  //     backgroundColor: "#00BFFF",
  //   },
  //   address_container:{
  //     flex:1,
  //     marginTop:10,
  //     height:100,
  //     flexDirection: 'column',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     marginBottom:20,
  //     width:250,
  //     borderRadius:30,
  //     backgroundColor: "#00BFFF",
  //   },
  //   edit_button:{
  //       borderRadius:10,
  //       backgroundColor:'grey',
  //       padding:5,
  //       width:40,
  //       alignItems:'center',
        
  //   },
   
  //   input: {
  //     marginTop:15,
  //     height: 40,
  //     borderColor: '#7a42f4',
  //     borderWidth: 1,
  //     padding:5,
  //     width:264,
  //  },
  //  add_button:{
  //   height:35,
  //   width:50,
  //   backgroundColor:'green',
  //   alignItems:'center',
  //   borderRadius:5,
  //   marginTop:10,
  //   justifyContent:'center',
  //   alignItems:'center',
  //  }

 

  });
   