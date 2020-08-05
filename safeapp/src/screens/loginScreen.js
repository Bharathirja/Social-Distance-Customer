
import React,{Component} from 'react';
import { Text, View, StyleSheet, Image, TextInput,TouchableOpacity } from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';



class Login extends Component {
  
  constructor(){
    super();
    this.state={
    }
  }
  render(){
    return (
      <View style={styles.container}>

      <View style={styles.app_details}>

        <View style={styles.app_name_image_quote}>
          <Text style={styles.text}>
            Welcome
          </Text>
        </View>

        <View style={styles.app_name_image_quote}>
        <Image source={require('../assets/octocat.png')} style={styles.image} />

        </View>

        <View style={styles.app_name_image_quote}>
          <Text style={styles.text}>
              PG Analytics
          </Text>
        </View>

      </View>

      <View style={styles.login}>

        <View style={styles.login_inputs}>
          <Text style={{fontSize:18}}>
            Enter your mobile number here
          </Text>
        </View>

        <View style={styles.login_inputs}>
          <View style={styles.inputContainer}>
          <Text style={styles.prefix}>+91</Text>
          <TextInput 
            style={styles.textinput} 
            keyboardType="numeric"
            underlineColorAndroid={'transparent'}

            />
          </View>
         
        </View>
        <View style={styles.submit}>
        <TouchableOpacity style={styles.login_arrow} onPress={()=>this.props.navigation.navigate('OTP')}>
        <Icon name="arrow-right" size={24}/>
                    
              </TouchableOpacity>
            </View>
      </View>

    </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  inputContainer:{
    flexDirection:'row'
  },
  prefix: {
    fontWeight: 'bold',
    color: 'grey',
    justifyContent:'center',
    fontSize:20,
    borderBottomWidth:1,

  },
  app_details:{
    flex:7,
    backgroundColor:'#4444ff'
  },
  app_name_image_quote:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    color:'white',
    fontSize:25,
    // fontFamily:'lucida grande'
  },
  login:{
    flex:3,
    backgroundColor:'#f1f1f1'
  },
  login_inputs:{
    flex:1,
    justifyContent:'center',
    paddingLeft:20,
    // flexDirection:'row',
  },
  textinput:{
    height:30,
    fontSize:18,
    borderBottomWidth:1,
    padding:5,
    width:300,
  },
  image:{
    height:140
  },
  buttonContainer:{
    backgroundColor:'#2980b9',
    paddingVertical:15,
    width:351
},
buttonText:{
    textAlign:'center',
    color:'#FFFFFF',
    fontWeight:'700',
},
submit:{
    flex:1,
    justifyContent:'center',
    // alignItems:'center',
    paddingLeft:20,
    alignItems:'center'

},
login_arrow:{
  height:50,
  width:50,
  backgroundColor:'#4444ff',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:35,
}
});

export default Login
