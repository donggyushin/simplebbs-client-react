import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import { FaAlignJustify } from "react-icons/fa";

const cx = classNames.bind(styles);

const Navigation = ({
  boxVisible,
  toggleBoxVisible,
  clickLogout,
  clickWriteButton
}) => (
  <div className={cx("container")}>
    <span onClick={toggleBoxVisible}>
      <FaAlignJustify />
    </span>
    {boxVisible && (
      <div className={cx("box")}>
        <span onClick={clickLogout}>logout</span>
        <span onClick={clickWriteButton}>write</span>
      </div>
    )}
  </div>
);

export default Navigation;
