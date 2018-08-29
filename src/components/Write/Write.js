import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Write = ({
  clickXButton,
  title,
  content,
  handleInput,
  clickSubmitButton
}) => (
  <div className={cx("container")}>
    <div className={cx("box")}>
      <div className={cx("header")}>
        <span role="img" onClick={clickXButton}>
          ❌
        </span>
      </div>
      <div className={cx("body")}>
        <div className={cx("title")}>
          <input
            name="title"
            value={title}
            placeholder="title..."
            onChange={handleInput}
          />
        </div>
        <div className={cx("content")}>
          <textarea
            name="content"
            value={content}
            placeholder="content..."
            onChange={handleInput}
          />
        </div>
      </div>
      <div className={cx("floor")}>
        <span className={cx("submit")} onClick={clickSubmitButton}>
          submit
        </span>
      </div>
    </div>
  </div>
);

export default Write;
