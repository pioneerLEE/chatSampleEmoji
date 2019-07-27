import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert,Dimensions,TouchableOpacity } from "react-native";
import RoomListPresenter from './presenter';
const { height, width } = Dimensions.get('screen');
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class RoomList extends Component {
  state = {
    visible:false,
    Rooms: [
      {
        key: 1,
        name: '이재원',
        chats:[],
      },
      {
        key: 2,
        name: '이재원',
        chats:[],
      },
      {
        key: 3,
        name: '이재원',
        chats:[],
      },
    ],
    isSome: false,
  };
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };
  
  static navigationOptions = {
    title: '방 목록',
    headerRight: (
      <TouchableOpacity style={{marginRight:20}} onPressOut={this._open}>
        <MaterialIcons name='playlist-add' size={25} color='rgb(226,226,226)' />
      </TouchableOpacity>
    ),
  };
  
  render() {
    console.log(this.state.visible);
    return (
      <RoomListPresenter
      {...this.state}
      {...this.props}
      close={this._close}
      addnewRoom={this._addnewRoom}
      />
    );
  }
  _open=()=>{
    console("작동된다 시발")
    this.setState({
      visible:true,
      Rooms: [
        {
          key: 1,
          name: '이재진',
          chats:[],
        },
      ],
    })
  }
  _close=()=>{
    this.setState({
      visible:false
    })
  }
  _addnewRoom=()=>{
    this.setState({
      visible:false
    })
    //post add room data: User.nickname
  }
}
export default RoomList;
