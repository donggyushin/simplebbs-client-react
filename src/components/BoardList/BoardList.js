import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import BoardListItemContainer from "components/BoardListItem/BoardListItemContainer";

const cx = classNames.bind(styles);

const BoardList = ({ loading, boards }) => (
  <div className={cx("container")}>
    {loading
      ? "loading"
      : boards.map(board => (
          <BoardListItemContainer {...board} key={board.id} />
        ))}
  </div>
);

export default BoardList;
