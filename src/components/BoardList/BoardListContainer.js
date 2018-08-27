import React, { Component } from "react";
import { connect } from "react-redux";
import BoardList from "components/BoardList/BoardList";
import * as boardActions from "store/modules/board";

class BoardListContainer extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    const { apiGetBoards } = this.props;
    apiGetBoards();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.boards) {
      this.setState({
        ...this.state,
        loading: false
      });
    }
  }

  render() {
    const { loading } = this.state;
    const { boards } = this.props;
    return <BoardList loading={loading} boards={boards} />;
  }
}

const mapStateToProps = state => ({
  boards: state.board.boards
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  apiGetBoards: () => dispatch(boardActions.apiGetBoards())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardListContainer);
