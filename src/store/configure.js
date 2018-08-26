import { createStore, applyMiddleware } from "redux";
import modules from "./modules";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";

const logger = createLogger();

const configure = () => {
  const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
  const store = createStore(
    modules,
    devTools,
    applyMiddleware(logger, ReduxThunk)
  );

  return store;
};

export default configure;
