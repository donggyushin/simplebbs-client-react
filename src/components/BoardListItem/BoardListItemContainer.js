import React, { Component } from "react";
import { connect } from "react-redux";
import BoardListItem from "components/BoardListItem/BoardListItem";

class BoardListItemContainer extends Component {
  render() {
    return <BoardListItem {...this.props} />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardListItemContainer);
