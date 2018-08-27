import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import { FaAlignJustify } from "react-icons/fa";

const cx = classNames.bind(styles);

const Navigation = ({ boxVisible, toggleBoxVisible, clickLogout }) => (
  <div className={cx("container")}>
    <span onClick={toggleBoxVisible}>
      <FaAlignJustify />
    </span>
    {boxVisible && (
      <div className={cx("box")}>
        <span onClick={clickLogout}>logout</span>
        <span>profile</span>
      </div>
    )}
  </div>
);

export default Navigation;
