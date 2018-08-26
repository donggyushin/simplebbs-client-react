import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import AppContainer from "components/App/AppContainer";

const Root = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default Root;
