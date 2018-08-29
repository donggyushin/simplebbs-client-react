import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import BoardListItemContainer from "components/BoardListItem/BoardListItemContainer";
import BoardDetailContainer from "components/BoardDetail/BoardDetailContainer";
import WriteContainer from "components/Write/WriteContainer";

const cx = classNames.bind(styles);

const BoardList = ({ loading, boards, boardDetail, boardWrite }) => (
  <div className={cx("container")}>
    {loading
      ? "loading"
      : boards.map(board => (
          <BoardListItemContainer {...board} key={board.id} />
        ))}
    {boardDetail && <BoardDetailContainer />}
    {boardWrite && <WriteContainer />}
  </div>
);

export default BoardList;
