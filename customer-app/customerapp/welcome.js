import React, { Component } from 'react'
import { View,Text,StyleSheet,Image} from 'react-native'
import Welcomecontent from './welcomecontent'

export class Welcome extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Image
            style={styles.logo}
                 source={require ('../assets/pg2.png')}
                />
               
               <View>
                   <Welcomecontent/>
               </View>
             
        </View>
        
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: 'center',
    alignItems:'center'
    },
   
    
 
   
  });
  

export default Welcome
