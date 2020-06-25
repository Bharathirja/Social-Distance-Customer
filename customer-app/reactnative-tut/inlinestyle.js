import React, { Component } from 'react'
import {StyleSheet, View,Text} from 'react-native'


export class inlinestyle extends Component {
    render() {
     
        return (
            <View style={styles.container}>
                <View style={{width:100,height:100,backgroundColor:'blue'}}/>
                {/* <Text style={{color:'red'}}>
                    React <Text style={{fontSize:25}}>Native</Text>
                    <Text style={{color:'blue',fontWeight:'bold'}}> Tutorial</Text>
                </Text>
                <Text style={styles.style}>customers app</Text> */}

            </View>
                
        )
    }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        margin:20,
        marginTop:30,
        backgroundColor:'linen',
        // paddingTop:100,
    },
   
});

export default inlinestyle
