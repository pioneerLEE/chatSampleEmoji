import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert,Dimensions,TouchableOpacity } from "react-native";
import SocketIOClient from 'socket.io-client/dist/socket.io.js';
import RoomListPresenter from './presenter';
const { height, width } = Dimensions.get('screen');
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { API_URL } from "../../constants";


class RoomList extends Component {
  constructor(props){
    super(props);
    this.socket = SocketIOClient(`${API_URL}/room`);
    this.socket.emit('channel1', 'Hi room namespace server');
    this.socket.on('newRoom',async (data)=>{
      console.log('socketNewroom',data);
      await this._addRoomList(data);
    })
  }
  state = {
    USER:this.props.navigation.getParam('USER'),
    visible:false,
    Rooms:[],
    isSome: false,
    selectedRoomId:null,
    loading:false
  };
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };
  static navigationOptions=({navigation}) =>{
    const { params }=navigation.state;
    return {
      title:'방 목록',
      headerLeft:(
        <TouchableOpacity style={{marginLeft:10}} onPressOut={()=>{navigation.goBack()}}>
          <SimpleLineIcons name='arrow-left' size={25} color='rgb(226,226,226)' />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity style={{marginRight:20}} onPressOut={navigation.getParam('open')}>
          <MaterialIcons name='playlist-add' size={25} color='rgb(226,226,226)' />
        </TouchableOpacity>
      )
    }
  }
  componentWillMount() {
    this.props.navigation.setParams({ open: this._open });
    this._roomlistLoad();
    console.log('USER:',this.state.USER,"끝");
  }
  render() {
    console.log('Rooms:',this.state.Rooms);
    return (
      <RoomListPresenter
      {...this.state}
      {...this.props}
      close={this._close}
      addnewRoom={this._addnewRoom}
      selectRoom={this._selectRoom}
      />
    );
  }
  _reset=()=>{
    this.setState({
      Rooms:[],
      loading:false,
    })
  }
  _addRoomList=async(data)=>{
    let instanceRoom = this.state.Rooms;
    await instanceRoom.push(data);
    await this.setState({Rooms:instanceRoom});
  }
  _roomlistLoad=()=>{
    fetch(`${API_URL}/roomlist`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      },
    })
    .then(response=>{
      return response.json();
    })
    .then(json =>{
      console.log('JSON',json);
      this.setState({
        Rooms:json
      })
    })
  }
  _open=()=>{
    this.setState({
      visible:true,
    })
  }
  _close=()=>{
    this.setState({
      visible:false
    })
  }
  _addnewRoom=async()=>{
    await this.setState({
      visible:false
    });
    //post add room data: User.nickname
    await this._trymake();
    //해당 방에 navigation
  }
  _trymake=()=>{
    fetch(`${API_URL}/newroom`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        userId:this.state.USER._id,
      })
    })
    .then(response=>{
      return response.json();
    })
    .then(json => {
      this.setState({
        selectedRoomId:json._id
      });
    })
    .catch(error =>{
      console.error(error);
    })
  }
  _selectRoom=(roomId)=>{
    console.log('selecting');
    this.setState({
      selectedRoomId:roomId
    });
  }
}
export default RoomList;
