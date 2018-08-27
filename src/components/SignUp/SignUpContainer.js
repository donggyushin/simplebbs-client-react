import React, { Component } from "react";
import { connect } from "react-redux";
import * as userAction from "store/modules/user";
import SignUp from "components/SignUp/SignUp";

class SignUpContainer extends Component {
  state = {
    username: "",
    password: ""
  };

  _clickSignUpButton = () => {
    const { apiSignUp, history } = this.props;
    const { username, password } = this.state;

    apiSignUp(username, password);
    history.push("/");
  };

  _handleInput = event => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "username") {
      this.setState({
        ...this.state,
        username: value
      });
    }
    if (name === "password") {
      this.setState({
        ...this.setState({
          ...this.state,
          password: value
        })
      });
    }
  };

  render() {
    const { username, password } = this.state;
    return (
      <SignUp
        clickSignUpButton={this._clickSignUpButton}
        handleInput={this._handleInput}
        username={username}
        password={password}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  apiSignUp: (username, password) =>
    dispatch(userAction.apiSignUp(username, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpContainer);
