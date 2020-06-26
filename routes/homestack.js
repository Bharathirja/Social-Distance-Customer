import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../customer-app/customerapp/Login';
import otpscreen from '../customer-app/customerapp/otpscreen';

const screens = {
    Home:{
        screen:Login
    },
    Otp:{
        screen:otpscreen
    }
}


const HomeStack = createStackNavigator(screens) 

export default createAppContainer(HomeStack)