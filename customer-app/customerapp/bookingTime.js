import React, { Component,useState } from 'react'
import { Text, View, StyleSheet,Button  } from 'react-native'
import {Formik} from 'formik';
import { TextInput } from 'react-native-paper';
// import DatePicker from 'react-native-datepicker'
import DatePicker from "@react-native-community/datetimepicker"



export const BookingTime=()=> {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');


    const onDateChange=(date)=>{
        console.log(date)
        setDate(date);
    }

    const onTimeChange=(time)=>{
        console.log(time)
        setTime(time)
    }
   
        return (
            <View style={styles.container}>
                <Text style={styles.txt_head}> For Booking enter the details now </Text>

                <Formik
                    initialValues={{username:'Mr.saravanan',date:'',time:'',description:''}}
                    onSubmit={(values)=>{
                        console.log(values)
                    }}
                >
                    {(props)=>(
                        <View style={styles.container_inputs}>
                            <TextInput
                                style={styles.input}
                                onChangeText={props.handleChange('username')}
                                value={props.values.username}
                                selectionColor='blue'
                                editable
                                editable={false}
                            

                            />

                            {/* <TextInput
                                style={styles.input}
                                placeholder='Select the Date'
                                onChangeText={props.handleChange('date')}
                                value={props.values.date}
                                selectionColor='blue'
                                editable

                            />  */}

                                <DatePicker
                                    style={styles.date}
                                    mode="date"
                                    placeholder="select the date"
                                    format="DD-MM-YYYY"
                                    minDate="2020-05-01"
                                    maxDate="2020-12-31"
                                
                                    showIcon={true}
                                    date={date}
                                    // iconSource={require('../assets/timeicon.png')}
                                    // onDateChange={(date) => {console.log(date)}}
                                    onDateChange={(date) => {onDateChange(date)}}
                                />    


                                    <DatePicker
                                    style={styles.time}
                                    mode="time"
                                    format="hh:mm-a"
                                    placeholder="select the time"
                                  
                                    is24Hour={false}
                                    date={time}
                                    iconSource={require('../assets/timeicon.png')}
                                    onDateChange={(time)=>{onTimeChange(time)}}


                                />  
                   
                            {/* <TextInput
                                style={styles.input}
                                placeholder='Select the Time'
                                onChangeText={props.handleChange('time')}
                                value={props.values.time}
                                selectionColor='blue'
                                editable
                            

                            /> */}
                               <TextInput
                               multiline
                                style={styles.input_multiline}
                                placeholder='Description'
                                onChangeText={props.handleChange('description')}
                                value={props.values.description}
                                selectionColor='blue'
                                editable
                            

                            />
                          

                            
                           

                                <Button title='submit' color='maroon' onPress={props.handleSubmit}/>

                       </View>


                    )}
                </Formik>
            </View>
        )
}

const styles =StyleSheet.create({
    container:{
        padding:10,
        marginVertical:10,
        
    },
    txt_head:{
        fontWeight:'bold',
        fontSize:20,
        color:'blue',
    },
    input:{
    fontSize:18,
    height: 50,
    borderWidth: 1,
    borderColor:'#ddd',  
    padding:10,
    borderRadius:6,
    marginTop: 10,
    marginBottom: 20,
    },
    input_multiline:{
        fontSize:18,
        height: 100,
        borderWidth: 1,
        borderColor:'#ddd',  
        padding:10,
        borderRadius:6,
        marginBottom: 20,

    },
    date:{
        width:380,
        marginBottom: 20,

        // marginRight:
        
    },
    time:{
        width:380,
        marginBottom: 20,


    }


})

export default BookingTime





// import React, { Component } from 'react'
// import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

// export default class BookingTime extends Component {

//    constructor(){
//     super()
//     this.state = {
//     date:"2016-05-15",
//     name: 'Mr.saravanan',
//     date: '',
//     time: '',
//     description:'',
// }


//   }
 
//    handledate = (text) => {
//       this.setState({ password: text })
//    }
//    handleTime = (text) => {
//     this.setState({ password: text })
//  }
//  handleDescription = (text) => {
//     this.setState({ password: text })
//  }
//    login = (email, pass) => {
//     alert('email: ' + email + ' password: ' + pass)
//  }

//    render() {
//       return (
//          <View style = {styles.container}>
//             <TextInput style = {styles.input}
//                underlineColorAndroid = "transparent"
//                placeholderTextColor = "#9a73ef"
//                autoCapitalize = "none"
//                value={this.state.name}
//                editable={false}
//             //    onChangeText = {this.handleEmail}
//                />
            
//             <TextInput style = {styles.input}
//                underlineColorAndroid = "transparent"
//                placeholder = "Select the date"
//                placeholderTextColor = "#9a73ef"
//                autoCapitalize = "none"
//                onChangeText = {this.handledate}/>

//                     <DatePicker
//                     style={{width: 200}}
//                     date={this.state.date}
//                     mode="date"
//                     placeholder="select date"
//                     format="YYYY-MM-DD"
//                     minDate="2016-05-01"
//                     maxDate="2016-06-01"
//                     confirmBtnText="Confirm"
//                     cancelBtnText="Cancel"
//                     customStyles={{
//                         dateIcon: {
//                         position: 'absolute',
//                         left: 0,
//                         top: 4,
//                         marginLeft: 0
//                         },
//                         dateInput: {
//                         marginLeft: 36
//                         }
//                         // ... You can check the source to find the other keys.
//                     }}
//                     onDateChange={(date) => {this.setState({date: date})}}
//                     />
                        
//             <TextInput style = {styles.input}
//                underlineColorAndroid = "transparent"
//                placeholder = "Select the time"
//                placeholderTextColor = "#9a73ef"
//                autoCapitalize = "none"
//                value={this.state.time}
//                onChangeText = {this.handleTime}/>
                        
//             <TextInput style = {styles.input}
//                underlineColorAndroid = "transparent"
//                placeholder = "Description  (optional)"
//                placeholderTextColor = "#9a73ef"
//                autoCapitalize = "none"
//                value={this.state.description}
//                onChangeText = {this.handleDescription}/>
            
//             <TouchableOpacity
//                style = {styles.submitButton}
//                onPress = {
//                   () => this.login(this.state.email, this.state.password)
//                }>
//                <Text style = {styles.submitButtonText}> Submit </Text>
//             </TouchableOpacity>
//          </View>
//       )
//    }
// }

// const styles = StyleSheet.create({
//     container: {
//        paddingTop: 23
//     },
//     input: {
//        margin: 15,
//        height: 40,
//        borderColor: '#7a42f4',
//        borderWidth: 1,
//        padding:5
//     },
//     submitButton: {
//        backgroundColor: '#7a42f4',
//        padding: 10,
//        margin: 15,
//        height: 40,
//     },
//     submitButtonText:{
//        color: 'white'
//     }
//  })