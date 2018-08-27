import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

const SignUp = ({ username, password, clickSignUpButton, handleInput }) => (
  <div className={cx("container")}>
    <div className={cx("box")}>
      <span className={cx("title")}>Sign Up</span>
      <input
        placeholder="username"
        type="text"
        name="username"
        value={username}
        onChange={handleInput}
      />
      <input
        placeholder="password"
        type="password"
        name="password"
        value={password}
        onChange={handleInput}
      />
      <Link to="/">
        <button className={cx("first")}>Sign In</button>
      </Link>

      <button onClick={clickSignUpButton}>Sign up</button>
    </div>
  </div>
);

export default SignUp;
