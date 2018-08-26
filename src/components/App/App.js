import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import { BrowserRouter as Router, Route } from "react-router-dom";
const cx = classNames.bind(styles);

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Main} />
    </div>
  </Router>
);

const Main = () => <div>Main</div>;

export default App;
