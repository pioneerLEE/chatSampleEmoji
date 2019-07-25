import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert,Dimensions } from "react-native";
import RoomListPresenter from './presenter';
const { height, width } = Dimensions.get('screen');

class RoomList extends Component {

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };
  static navigationOptions = {
    title: '방 목록',
    headerStyle:{
      backgroundColor:'rgb(245,245,245)',
      height: height/667*50,
      borderBottomWidth: 1,
      borderBottomColor:'rgb(83,181,53)'
    },
    headerTitleStyle:{
      fontSize:24,
      color:'black',
    },
  };

  state = {
    
  };
  render() {
    console.log(this.props.profile);
    return (
      <RoomListPresenter
      {...this.state}
      {...this.props}
      />
    );
  }
}
export default RoomList;
