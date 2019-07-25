import React from 'react';
import { Dimensions } from 'react-native';
import { createAppContainer, createStackNavigator } from "react-navigation";

const { height, width } = Dimensions.get('screen');

import Signin from '../Screens/Signin';
//import Signup from '../Screens/Signup';
import RoomList from '../Screens/RoomList';
//import Chat from '../Screens/Chat';

const Navi = createStackNavigator({
  SigninScreen : { screen: Signin  },
  //SignupScreen : { screen: Signup  },
  RoomlistScreen : { screen: RoomList  },
  //ChatScreen : { screen: Chat  },
}, {
  initialRouteName: 'RoomlistScreen',
  defaultNavigationOptions:{
    headerBackTitle:null,
    headerStyle:{
      backgroundColor:'rgb(245,245,245)',
      height: height/667*72,
      shadowColor: 'transparent',
      borderBottomWidth: 0,
    },
    headerTitleStyle:{
      fontSize:24,
      color:'rgb(0,0,0)',
    },
    headerTintColor:'rgb(0,0,0)',
  }
});

export default createAppContainer(Navi);