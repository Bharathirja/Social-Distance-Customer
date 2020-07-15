import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


function ActiveScreen() {
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
    );
  }
  
  function PastScreen() {
    return (
        <View>
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
    );
  }
  
  const Tab = createMaterialTopTabNavigator();
  
  export default function BookingTab() {
    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator>
          <Tab.Screen name="Active" component={ActiveScreen} />
          <Tab.Screen name="Past" component={PastScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  const styles = StyleSheet.create({

    cardTitle:{
        color:'red'
    }


})