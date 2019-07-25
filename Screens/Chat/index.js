import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import ChatPresenter from './presenter';

class Chat extends Component {
  static navigationOptions = {
    header: null,
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
