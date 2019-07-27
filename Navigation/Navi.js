import React from 'react';
import { Dimensions } from 'react-native';
import { createAppContainer, createStackNavigator } from "react-navigation";

const { height, width } = Dimensions.get('screen');

import Signin from '../Screens/Signin';
//import Signup from '../Screens/Signup';
import RoomList from '../Screens/RoomList';
import Chat from '../Screens/Chat';

const Navi = createStackNavigator({
  SigninScreen : { screen: Signin  },
  //SignupScreen : { screen: Signup  },
  RoomlistScreen : { screen: RoomList  },
  ChatScreen : { screen: Chat  },
}, {
  initialRouteName: 'RoomlistScreen',
  defaultNavigationOptions:{
    headerBackTitle:null,
    headerStyle:{
      backgroundColor:'rgb(34,43,62)',
      height: height/667*45,
      borderBottomWidth: 1,
      borderBottomColor:'rgb(34,43,62)'
    },
    headerTitleStyle:{
      fontSize:20,
      color:'white',
    },
    headerTintColor:'white',
  }
});

export default createAppContainer(Navi);