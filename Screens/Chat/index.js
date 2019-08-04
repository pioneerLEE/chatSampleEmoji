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
    this.socket = SocketIOClient(`${API_URL}/chat`);
    this.socket.on('join',async(data)=>{
      console.log('join_socket',data);
      // 참여 리스트에 추가
    });
    this.socket.on('exit',async(data)=>{
      console.log('exit_socket',data);
    });
    this.socket.on('chat',async(data)=>{
      console.log('chat_socket',data);
      await _addChat(data);
    });
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
    USER:this.props.navigation.getParam('USER'),
    selectedRoomId:this.props.navigation.getParam('selectedRoomId'),
    exRoom:{},
    chats:{},

  };
  componentWillMount(){
    this._chatLoad(this.state.selectedRoomId);
  }
  render() {
    return (
      <ChatPresenter
      {...this.state}
      {...this.props}
      />
    );
  }
  _chatLoad = async( id ) => {
    //room 정보가지고 오기
    await this._getRoominfo(id);
    //해당 채팅방에 참가히기
    await this._joinRoom(id);
  };
  _getRoominfo = (id) =>{
    fetch(`${API_URL}/room/${id}`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      },
    })
    .then(response=>{
      return response.json();
    })
    .then(json=>{
      this.setState({
        exRoom:json
      })
    })
  }
  _joinRoom = (id) =>{
    fetch(`${API_URL}/room/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        userId:this.state.USER._id
      })
    })
  }
  _addChat=async(chat)=>{
    let exChats = this.state.chats;
    await exChats.push(chat);
    await this.setState({
      chats:exChats
    })
  }

  
}
export default Chat;
