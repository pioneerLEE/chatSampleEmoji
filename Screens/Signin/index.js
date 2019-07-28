import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import { API_URL } from '../../constants'; 
import SigninPresenter from './presenter';

class Signin extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    USER:{},
    ID:"",
    PW:"",
    isLoading:false,
    isfail:false,
    islogin:false
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
      Login={this._Login}
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
  };
  _Login = async(ID,PW) =>{
    if(!this.state.isLoading){
      await this.setState({
        isLoading:true
      });
      await this._tryLogin(ID,PW);
    }
  }
  _tryLogin =(ID,PW)=>{
    fetch(`${API_URL}/signin`,{
      method:"POST",
      headers:{
        "Content-Tyoe":"application/json"
      },
      body: JSON.stringify({
        email:ID,
        password:PW,
      })
    })
    .then(response=>{
      if(response.status === 200){
        return response.json();
      }else{
        this.setState({
          isLoading:false,
          isfail:true,
        });
      }
    })
    .then(json => {
      this.setState({
        USER:json,
        islogin:true
      });
    })
    .catch(error =>{
      console.error(error);
      return { name: "network error", description: "" };
    })
  }
}
export default Signin;
