import React, { Component } from "react";
import App from "./App";
import { connect } from "react-redux";
import * as userActions from "store/modules/user";

class AppContainer extends Component {
  componentDidMount() {
    const { apiGetToken } = this.props;
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
  apiGetToken: () => dispatch(userActions.apiGetToken())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
