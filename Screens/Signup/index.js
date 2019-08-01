import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import SignupPresenter from './presenter';

class Signup extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };
  static navigationOptions=({navigation}) =>{
    const { params }=navigation.state;
    return {
      title:'회원가입',
    }
  }
  state = {
    nick:"",
    email:"",
    password:"",
    isFail:false,
  };
  render() {
    return (
      <SignupPresenter
      {...this.state}
      {...this.props}
      changeNick={this._changeNick}
      changeEmail={this._changeID}
      changePassword={this._changePW}
      />
    );
  }
  _changeNick = text => {
    this.setState({ nick: text });
  };
  _changeID = text => {
    this.setState({ email: text });
  };
  _changePW = text => {
    this.setState({ password: text });
  };
}
export default Signup;
