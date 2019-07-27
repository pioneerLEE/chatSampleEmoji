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
    
  };
  state = {
    
  };
  render() {
    return (
      <ChatPresenter
      {...this.state}
      {...this.props}
      />
    );
  }
}
export default Chat;
