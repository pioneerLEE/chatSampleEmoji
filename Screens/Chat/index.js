import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert,Dimensions,TouchableOpacity } from "react-native";
import ChatPresenter from './presenter';
import SocketIOClient from 'socket.io-client/dist/socket.io.js';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { API_URL } from '../../constants';
const Emoji_API = "http://5e297431.ngrok.io" 

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
      await this._addChat(data);
    });
  }
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };
  static navigationOptions=({navigation}) =>{
    const {params = {}} = navigation.state;
    const { goBack }=navigation;
    _out=async()=>{
      await params.outChat()
      await goBack();
    }
    return {
      title:'이재원',
      headerLeft:(
        <TouchableOpacity style={{marginLeft:10}} onPressOut={_out}>
          <SimpleLineIcons name='arrow-left' size={25} color='rgb(226,226,226)' />
        </TouchableOpacity>
      ),
    }
  }
  state = {
    USER:this.props.navigation.getParam('USER'),
    selectedRoomId:this.props.navigation.getParam('selectedRoomId'),
    exRoom:{},
    chats:[],
    message:"",
    emoticons:null,
    image:null,

  };
  componentWillMount(){
    this._chatLoad(this.state.selectedRoomId);
  }
  render() {
    return (
      <ChatPresenter
      {...this.state}
      {...this.props}
      changeMessage={this._changeMessage}
      sendMessage={this._sendMessage}
      loadEmoji={this._loadEmoji}
      sendEmoji={this._sendEmoji}
      />
    );
  }
  componentDidMount() {
    this.props.navigation.setParams({
        outChat: this._outChat
    });
  }
  _loadEmoji=()=>{
    fetch(`${Emoji_API}/init`,{
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
        emoticons:json
      })
    })
  }
  _outChat=()=>{
    const { exRoom, USER }=this.state
    fetch(`${API_URL}/room/${exRoom._id}`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        userId:USER._id,
      })
    })
  }
  _sendMessage= async() =>{
    await this._sendingTEXT();
    await this.setState({
      message:""
    })
  }
  _sendEmoji=imgURL=>{
    const { exRoom, USER }=this.state
    fetch(`${API_URL}/room/${exRoom._id}/message`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        userId:USER._id,
        category:'emoji',
        messageData : imgURL
      })
    })
  }
  _sendingTEXT=()=>{
    const { exRoom, USER, message }=this.state
    fetch(`${API_URL}/room/${exRoom._id}/message`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        userId:USER._id,
        category:'text',
        messageData : message
      })
    })
  }

  _changeMessage= (text) => {
    this.setState({
      message:text
    })
  }
  _chatLoad = async(id) => {
    //room 정보가지고 오기
    await this._getRoominfo(id);
    //해당 채팅방에 참가히기
    await this._joinRoom(id);
    await this._loadEmoji();
  };
  _getRoominfo = (id) =>{
    console.log('_getRoominfo1',id);
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
      console.log('_getRoominfo2',json);
      this.setState({
        exRoom:json[0]
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
