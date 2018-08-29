import React, { Component } from "react";
import { connect } from "react-redux";
import Navigation from "components/Navigation/Navigation";
import * as userActions from "store/modules/user";
import * as boardActions from "store/modules/board";

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

  _clickWriteButton = () => {
    const { TurnOnWriteForm } = this.props;
    TurnOnWriteForm();
  };

  render() {
    const { boxVisible } = this.state;
    return (
      <Navigation
        boxVisible={boxVisible}
        toggleBoxVisible={this._toggleBoxVisible}
        clickLogout={this._clickLogout}
        clickWriteButton={this._clickWriteButton}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  apiLogout: () => dispatch(userActions.apiLogout()),
  TurnOnWriteForm: () => dispatch(boardActions.TurnOnWriteForm())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationContainer);
