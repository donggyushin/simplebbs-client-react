import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const BoardListItem = ({
  content,
  id,
  title,
  username,
  profile_image,
  onClickBoardItem,
  userId
}) => (
  <div className={cx("container")} onClick={() => onClickBoardItem(id)}>
    <div>
      <img
        src={
          profile_image
            ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiuJsdm0rgK431zYw7TBcPkzqdD6MJz0aPez2nFxm1EeKuosCaYg"
            : `/media/${userId % 5}.jpeg`
        }
      />
      <span>{username}</span>
    </div>
    <span>{title}</span>
  </div>
);

export default BoardListItem;
