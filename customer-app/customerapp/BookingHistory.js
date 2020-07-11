import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity,Image} from 'react-native'
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

export class BookingHistory extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <TouchableOpacity  style={styles.card}> */}
                <View style={{flex:5,marginBottom:350}}>
                <Text > your booking was reshedule on 12-12-20</Text>
                <Text > booking cancelled</Text>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // alignItems:'center',
        // justifyContent:'center',
        // width:"100%"
    },


})

export default BookingHistory
