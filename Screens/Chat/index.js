import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert,Dimensions } from "react-native";
import ChatPresenter from './presenter';
import SocketIOClient from 'socket.io-client/dist/socket.io.js';
import { API_URL } from '../../constants'; 

const { height, width } = Dimensions.get('screen');


class Chat extends Component {
  constructor(props){
    super(props);
    this.socket = SocketIOClient(`${API_URL}`);
    this.socket.emit('channel1', 'Hi server');
  }
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
  _reset=()=>{
    this.setState({isLoading:false});
  }
  _changeID = text => {
    this.setState({ ID: text });
  };
  _changePW = text => {
    this.setState({ PW: text });
  }
}
export default Chat;
