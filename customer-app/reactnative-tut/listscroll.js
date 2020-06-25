import React, { useState } from 'react'
import {StyleSheet, View,Text,FlatList,TouchableOpacity} from 'react-native'

export default function listscroll() {
    const [people,setPeople] = useState([
                    {name:'anand',id:'1'},
                    {name:'ice',id:'2'},
                    {name:'sr',id:'3'},
                    {name:'veil',id:'4'},
                    {name:'veil',id:'5'},
                    {name:'veil',id:'6'},
                    {name:'veil',id:'7'},
                    {name:'veil',id:'8'},
                    {name:'veil',id:'9'},
                    {name:'veil',id:'10'},
                    {name:'veil',id:'11'},
                    {name:'veil',id:'12'},
                ]);

                const pressHandler = (id)=>{
                    console.log(id)
                    setPeople((prePeople)=>{
                        return prePeople.filter(person=>person.id !=id)
                    })
                }
        
    return (
        <View style={styles.container}>

            <FlatList
            numColumns={2}
            keyExtractor={(item)=>item.id}
               data={people}
               renderItem={({item})=>(
                <TouchableOpacity onPress={()=>pressHandler(item.id)}>
                <Text style={styles.item}>{item.name}</Text>
                </TouchableOpacity>

               )}
            
            />

            {/* <ScrollView>
                       {people.map(item=>(
                                <View key={item.key}>
                                    <Text style={styles.item}>{item.name}</Text>
                                </View>
                       ))}
                    </ScrollView> */}
        
                    </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingTop:40,
        paddingHorizontal:20,
        minWidth:200
    },
    item:{
        marginTop:24,
        padding:30,
        backgroundColor:'pink',
        fontSize:24,
        marginHorizontal:10,
        marginTop:30

    }

});

