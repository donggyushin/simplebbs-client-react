import React, { Component } from "react";
import { connect } from "react-redux";
import BoardDetail from "components/BoardDetail/BoardDetail";
import * as boardActions from "store/modules/board";

class BoardDetailContainer extends Component {
  state = {
    loading: true,
    comment: ""
  };

  _handleInput = event => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      comment: value
    });
  };

  _onClickCloseButton = () => {
    const { closeBoardDetail, removeBoardDetail } = this.props;
    removeBoardDetail();
    closeBoardDetail();
    this.setState({
      ...this.state,
      loading: true
    });
  };

  _enterInput = event => {
    console.log(event.key);
    const key = event.key;
    const { id } = this.props.boardDetails.board;
    const { apiRegisterCommet } = this.props;
    const { comment } = this.state;
    if (key === "Enter") {
      apiRegisterCommet(id, comment);
      this.setState({
        ...this.state,
        comment: ""
      });
    }
  };

  componentWillUpdate(nextProps) {
    if (!this.props.boardDetails && nextProps.boardDetails) {
      this.setState({
        ...this.state,
        loading: false
      });
    }
  }

  render() {
    const { loading, comment } = this.state;
    const { boardDetails } = this.props;
    return (
      <BoardDetail
        loading={loading}
        onClickCloseButton={this._onClickCloseButton}
        boardDetails={boardDetails}
        comment={comment}
        handleInput={this._handleInput}
        enterInput={this._enterInput}
      />
    );
  }
}

const mapStateToProps = state => ({
  boardDetails: state.board.boardDetails
});

const mapDispatchToProps = dispatch => ({
  closeBoardDetail: () => dispatch(boardActions.closeBoardDetail()),
  removeBoardDetail: () => dispatch(boardActions.removeBoardDetail()),
  apiRegisterCommet: (boardId, message) =>
    dispatch(boardActions.apiRegisterCommet(boardId, message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardDetailContainer);
