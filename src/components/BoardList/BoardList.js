import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import BoardListItemContainer from "components/BoardListItem/BoardListItemContainer";
import BoardDetailContainer from "components/BoardDetail/BoardDetailContainer";

const cx = classNames.bind(styles);

const BoardList = ({ loading, boards, boardDetail }) => (
  <div className={cx("container")}>
    {loading
      ? "loading"
      : boards.map(board => (
          <BoardListItemContainer {...board} key={board.id} />
        ))}
    {boardDetail && <BoardDetailContainer />}
  </div>
);

export default BoardList;
