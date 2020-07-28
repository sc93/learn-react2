import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./modules";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// import loggerMiddleware from "./lib/loggerMiddleware";
import { createLogger } from "redux-logger";
import reduxThunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./modules/index";
import { composeWithDevTools } from "redux-devtools-extension";
const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, reduxThunk, sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
