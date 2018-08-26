import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const Login = ({ handleInput, username, password, inputSignInButton }) => (
  <div className={cx("container")}>
    <div className={cx("box")}>
      <span className={cx("title")}>Sign In</span>
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
      <button className={cx("first")} onClick={inputSignInButton}>
        Sign In
      </button>
      <button>Sign up</button>
    </div>
  </div>
);

export default Login;
