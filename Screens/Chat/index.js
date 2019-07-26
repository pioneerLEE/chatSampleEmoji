import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert,Dimensions } from "react-native";
import ChatPresenter from './presenter';
const { height, width } = Dimensions.get('screen');

class Chat extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };
  static navigationOptions = {
    title: '이재원',
    headerStyle:{
      backgroundColor:'rgb(34,43,62)',
      height: height/667*50,
      borderBottomWidth: 1,
      borderBottomColor:'rgb(34,43,62)'
    },
    headerTitleStyle:{
      fontSize:20,
      color:'white',
    },
  };
  state = {
    
  };
  render() {
    console.log(this.props.profile);
    return (
      <ChatPresenter
      {...this.state}
      {...this.props}
      />
    );
  }
}
export default Chat;
