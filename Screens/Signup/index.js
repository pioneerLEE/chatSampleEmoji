import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import SignupPresenter from './presenter';

class Signup extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    
  };
  render() {
    console.log(this.props.profile);
    return (
      <SignupPresenter
      {...this.state}
      {...this.props}
      />
    );
  }
}
export default Signup;
