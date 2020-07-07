import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity,Image} from 'react-native'

export class BookingHistory extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity  style={styles.card}>
                    {/* <Image style={styles.cardImage} source={{uri:'data:image/png;base64,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'}}/> */}
                <Text style={styles.cardText}> Card title </Text>
            
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    cardText:{
        fontSize:30
    },
    card:{
        backgroundColor:'#fff',
        marginBottom:10,
        marginLeft:'2%',
        width:'100%',
        shadowColor:'#000',
        shadowOpacity:1,
        shadowOffset:{
            width:3,
            height:3
        }

    },
    cardImage:{
        width:'100%',
        height:200,
        resizeMode:'cover'
    }

})

export default BookingHistory
