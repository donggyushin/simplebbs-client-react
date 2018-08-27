import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginContainer from "components/Login/LoginContainer";
import NavigationContainer from "components/Navigation/NavigationContainer";
import SignUpContainer from "components/SignUp/SignUpContainer";
import BoardListContainer from "components/BoardList/BoardListContainer";
const cx = classNames.bind(styles);

const App = ({ isLoggedIn }) => (
  <Router>
    <div>{isLoggedIn ? PrivateComponent() : PublicComponent()}</div>
  </Router>
);

const PublicComponent = () => (
  <div>
    <Route exact path="/" component={LoginContainer} />
    <Route path="/new" component={SignUpContainer} />
  </div>
);

const PrivateComponent = () => (
  <div>
    <NavigationContainer />
    <Route exact path="/" component={BoardListContainer} />
  </div>
);

export default App;
