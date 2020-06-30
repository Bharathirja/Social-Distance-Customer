import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { View, Text,TouchableOpacity,Animated} from 'react-native'
// import Animated from 'react-native-reanimated'

export class menutabscreen extends Component {

    state={
        active:0,
        xTabOne:0,
        xTabTwo:0,
        translateX:new Animated.Value(0)
    }

    handleSlide = type =>{
        let {active,xTabOne,xTabTwo,translateX}=this.state;
        Animated.spring(translateX,{
            toValue:type,
            duration:100,
        }).start();
    };
    render() {
        let{xTabOne,xTabTwo,translateX,active}=this.state
        return (
            <View style={{flex:1}}>
                <View style={{width:'90%',
                            marginLeft:'auto',
                            marginRight:'auto'}}>
                    <View style={{flexDirection:'row',
                                    marginTop:40,
                                    marginBottom:20,
                                    height:36,
                                    position:'relative'}}>
                                        <Animated.View
                                        style={{position:'absolute',width:'50%',height:'100%',
                                        top:0,left:0,backgroundColor:'#007aff',
                                        transform:[{
                                            translateX

                                        }]}}/>
                        <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center',
                    borderWidth:1,borderColor:'#007aff',borderRadius:4, borderRightWidth:0,borderTopRightRadius:0,borderBottomRightRadius:0}}
                    onLayout={event=>this.setState({xTabOne:event.nativeEvent.layout.x})}
                    onPress={()=>this.setState({active:0},()=>this.handleSlide(xTabOne))}
                    >
                            <Text>tab 1</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center',
                    borderWidth:1,borderColor:'#007aff',borderRadius:4,borderleftWidth:0,borderTopLeftRadius:0,borderBottomLeftRadius:0}}
                    onLayout={event=>this.setState({xTabTwo:event.nativeEvent.layout.x})}

                    >
                            <Text>tab 2</Text>

                        </TouchableOpacity>


                    </View>
                </View>
            </View>

           
        )
    }
}

export default menutabscreen
