import React, { Component } from "react";
import { connect } from "react-redux";
import BoardListItem from "components/BoardListItem/BoardListItem";
import * as boardActions from "store/modules/board";

class BoardListItemContainer extends Component {
  _onClickBoardItem = boardId => {
    const { apiGetBoardDetails } = this.props;
    apiGetBoardDetails(boardId);
  };

  render() {
    return (
      <BoardListItem
        {...this.props}
        onClickBoardItem={this._onClickBoardItem}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  apiGetBoardDetails: boardId =>
    dispatch(boardActions.apiGetBoardDetails(boardId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardListItemContainer);
