import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./store/reducer";
import {watchVechileDetails} from "./store/saga";

import App from "./presentation/App";
import FindFalcone from "./presentation/FindFalcone";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/findFalcone" component={FindFalcone} />
    </div>
    </Provider>
  </Router>,
  document.getElementById("root")
);

sagaMiddleware.run(watchVechileDetails);
