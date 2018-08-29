import React, { Component } from "react";
import { connect } from "react-redux";
import Write from "components/Write/Write";
import * as boardActions from "store/modules/board";

class WriteContainer extends Component {
  state = {
    title: "",
    content: ""
  };
  _clickXButton = () => {
    const { TurnOffWriteForm } = this.props;
    this.setState({
      title: "",
      content: ""
    });
    TurnOffWriteForm();
  };

  _handleInput = event => {
    const value = event.target.value;
    const name = event.target.name;
    if (name === "title") {
      this.setState({
        ...this.state,
        title: value
      });
    } else if (name === "content") {
      this.setState({
        ...this.state,
        content: value
      });
    }
  };

  _clickSubmitButton = () => {
    const { title, content } = this.state;
    const { apiRegistNewBoard } = this.props;
    apiRegistNewBoard(title, content);
  };
  render() {
    const { title, content } = this.state;
    return (
      <Write
        clickXButton={this._clickXButton}
        title={title}
        content={content}
        handleInput={this._handleInput}
        clickSubmitButton={this._clickSubmitButton}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  TurnOffWriteForm: () => dispatch(boardActions.TurnOffWriteForm()),
  apiRegistNewBoard: (title, content) =>
    dispatch(boardActions.apiRegistNewBoard(title, content))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WriteContainer);
