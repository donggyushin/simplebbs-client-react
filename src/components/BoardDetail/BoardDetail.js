import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const BoardDetail = ({
  onClickCloseButton,
  loading,
  comment,
  boardDetails,
  handleInput,
  enterInput
}) => (
  <div className={cx("container")}>
    {!loading ? (
      <div className={cx("boxContainer")}>
        <div className={cx("box")}>
          <div className={cx("header")}>
            <span
              role="img"
              className={cx("close")}
              onClick={onClickCloseButton}
            >
              ❌
            </span>
          </div>
          <div className={cx("body")}>
            <div className={cx("profile")}>
              <img
                className={cx("image")}
                src={
                  boardDetails.board.profile_image
                    ? `/media/${boardDetails.board.profile_image}`
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiuJsdm0rgK431zYw7TBcPkzqdD6MJz0aPez2nFxm1EeKuosCaYg"
                }
              />
              <span className={cx("username")}>
                {boardDetails.board.username}
              </span>
            </div>
            <div className={cx("title")}>{boardDetails.board.title}</div>
            <p className={cx("content")}>{boardDetails.board.content}</p>
          </div>
        </div>
        <Comment
          comments={boardDetails.comments}
          comment={comment}
          handleInput={handleInput}
          enterInput={enterInput}
        />
      </div>
    ) : (
      "loading"
    )}
  </div>
);

const Comment = ({ comment, handleInput, comments, enterInput }) => (
  <div className={cx("comment")}>
    <div className={cx("input")}>
      <input
        name="comment"
        value={comment}
        onChange={handleInput}
        placeholder="Leave a comment..."
        onKeyPress={enterInput}
      />
    </div>
    <hr />
    <div className={cx("commentList")}>
      {comments &&
        comments.map(comment => <CommentItem {...comment} key={comment.id} />)}
    </div>
  </div>
);

const CommentItem = ({ id, message, username }) => (
  <div className={cx("commentItem")}>
    <span className={cx("username")}>{username}</span>
    <span>{message}</span>
    <hr />
  </div>
);

export default BoardDetail;
