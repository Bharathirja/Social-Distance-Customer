import React, { Component } from 'react'
import { Text, View,SafeAreaView,StyleSheet,Image,Alert} from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { Actions } from 'react-native-router-flux';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class NotificationsCarousal extends Component {
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
        //   carouselItems: [
        //   {
        //       title:"Notification 1",
        //   },
        //   {
        //       title:"Notification 2",
        //   },
        //   {
        //       title:"Notification 3",
        //   },
        //   {
        //       title:"Notification 4",
        //       // text:"buy one get one"
        //   },
        // ]
        carouselItems:[
          {image:require('../assets/notification1.jpg'),text:"notification 1"},
          {image:require('../assets/notification2.jpg'),text:"notification 2"},
          {image:require('../assets/notification3.jpg'),text:"notification 3"},
          {image:require('../assets/note2.jpg'),text:"notification 4"},
          {image:require('../assets/note1.jpg'),text:"notification 5"},


        ]
      }
    }

    _renderItem({item,index}){
        return (
          <TouchableOpacity onPress={()=>Alert.alert(item.text)}>
          <View style={{
              // backgroundColor:'floralwhite',
              borderRadius: 5,
              height: 300,
              // padding: 20,
            //   marginLeft: 25,
            //   marginRight: 25,
               }}>
            {/* <Text style={{fontSize: 30}}>{item.image}</Text> */}
            {/* <Text>{item.text}</Text> */}
            <Image source = {item.image} style={styles.image} />
          </View>
          </TouchableOpacity>

        )
    }

    render() {
        return (
          <SafeAreaView>
            <View style={{ flexDirection:'row',width:400,height:200 }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={350}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index})} />
            </View>
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  image:{
    flex: 1,
        alignSelf: 'stretch',
      
    }


 

});



export default NotificationsCarousal
