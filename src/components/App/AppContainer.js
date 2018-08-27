import React, { Component } from "react";
import App from "./App";
import { connect } from "react-redux";
import * as userActions from "store/modules/user";

class AppContainer extends Component {
  componentDidMount() {
    const { apiGetToken, removeToken } = this.props;
    removeToken();
    apiGetToken();
  }

  render() {
    const { isLoggedIn } = this.props;
    return <App isLoggedIn={isLoggedIn} />;
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  apiGetToken: () => dispatch(userActions.apiGetToken()),
  removeToken: () => dispatch(userActions.removeToken())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
