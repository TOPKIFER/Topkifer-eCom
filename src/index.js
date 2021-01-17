import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {applyMiddleware, createStore} from "redux";
import rootReducers from "./redux/reducers/rootReducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

const appStore = createStore(rootReducers, applyMiddleware(thunk));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={appStore}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();
