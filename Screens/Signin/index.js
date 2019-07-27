import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import SigninPresenter from './presenter';

class Signin extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    ID:"",
    PW:"",
    isLoading:false,
  };
  render() {
    const {ID,PW} = this.state;
    console.log('ID:',ID,' PW',PW)
    return (
      <SigninPresenter
      {...this.state}
      {...this.props}
      changeID={this._changeID}
      changePW={this._changePW}
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
  };/*
  _Login = async(ID,PW) =>{
    const {ID,PW} = this.state; 
    if(!this.state.isLoading){
      await this.setState({
        isLoading:true
      });
      await this._tryLogin(ID,PW);
    }
  }*/
}
export default Signin;
