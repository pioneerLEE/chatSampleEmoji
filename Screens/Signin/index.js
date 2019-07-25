import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import SigninPresenter from './presenter';

class Signin extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    
  };
  render() {
    console.log(this.props.profile);
    return (
      <SigninPresenter
      {...this.state}
      {...this.props}
      />
    );
  }
}
export default Signin;
