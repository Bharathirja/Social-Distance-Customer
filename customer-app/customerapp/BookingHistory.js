import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity,Image} from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
// import BootstrapStyleSheet from 'react-native-bootstrap-styles';

export class BookingHistory extends Component {
    render() {
        return (
               
                <View>
                    <Card
                        title='8-08-2020' 
                        titleStyle={styles.cardTitle}
                    >
                    <Text style={{marginBottom: 10}}>
                        Here we shows that something about the description of booking on this date
                    </Text>
                    {/* <Button
                        icon={<Icon name='' color='#ffffff' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='VIEW NOW' /> */}
                    </Card>
                    <Card
                        title='31-09-2020'
                        titleStyle={styles.cardTitle}
                    >
                    <Text style={{marginBottom: 10}}>
                        Here we shows that something about the description of booking on this date
                    </Text>
                    {/* <Button
                        icon={<Icon name='' color='#ffffff' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='VIEW NOW' /> */}
                    </Card>
                    <Card
                        title='3-10-2020'
                        titleStyle={styles.cardTitle}
                    >
                    <Text style={{marginBottom: 10}}>
                        Here we shows that something about the description of booking on this date
                    </Text>
                    {/* <Button
                        icon={<Icon name='' color='#ffffff' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='VIEW NOW' /> */}
                    </Card>
                    </View>
                
        )
    }
}

const styles = StyleSheet.create({
    // card:{
    //     borderRadius:6,
    //     elevation:3,
    //     backgroundColor:'#fff',
    //     shadowOffset:{width:20,height:30},
    //     shadowColor:'#333',
    //     shadowOpacity:0.3,
    //     shadowRadius:2,
    //     marginHorizontal:4,
    //     marginVertical:6,


      
    // },
    // cardContent: {

    // }

    cardTitle:{
        color:'red'
    }


})

export default BookingHistory
