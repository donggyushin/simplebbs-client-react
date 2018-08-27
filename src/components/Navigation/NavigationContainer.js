import React, { Component } from "react";
import { connect } from "react-redux";
import Navigation from "components/Navigation/Navigation";
import * as userActions from "store/modules/user";

class NavigationContainer extends Component {
  state = {
    boxVisible: false
  };

  _toggleBoxVisible = () => {
    this.setState({
      ...this.state,
      boxVisible: !this.state.boxVisible
    });
  };

  _clickLogout = () => {
    const { apiLogout } = this.props;
    apiLogout();
  };

  render() {
    const { boxVisible } = this.state;
    return (
      <Navigation
        boxVisible={boxVisible}
        toggleBoxVisible={this._toggleBoxVisible}
        clickLogout={this._clickLogout}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  apiLogout: () => dispatch(userActions.apiLogout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationContainer);
