import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert,Dimensions,TouchableOpacity } from "react-native";
import RoomListPresenter from './presenter';
const { height, width } = Dimensions.get('screen');
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { API_URL } from "../../constants";

class RoomList extends Component {
  state = {
    USER:this.props.navigation.getParam('USER'),
    visible:false,
    Rooms:[],
    isSome: false,
    goRoom: null,
    selectedRoomId:""
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
    //console.log('Rooms:',this.state.Rooms);
    console.log('USER:',this.state.USER,"끝");
  }
  render() {
    console.log("visible:",this.state.visible);
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
  _roomlistLoad=()=>{
    fetch(`${API_URL}/roomlist`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      },
    })
    .then(response=>{
      if(response.status=200){
        return response.json();
      }
    })
    .then(json =>{
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
        goRoom:json
      });
    })
    .catch(error =>{
      console.error(error);
    })
  }
  _selectRoom=async(roomId)=>{

  }
}
export default RoomList;
