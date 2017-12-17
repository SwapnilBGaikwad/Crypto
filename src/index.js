import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./app/component/HomePage";

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AppReducer from './app/component/reducers/AppReducer'

let store = createStore(AppReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <HomePage/>
    </Provider>,
    document.getElementById("root"));