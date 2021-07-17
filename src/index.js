import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/App.css'
import './css/deleteDefaultStyles.css'
import './css/fonts.css'
import {Provider} from "react-redux";
import {store} from "./store/store";


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
  document.getElementById('root')
);

