import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import store from './store'

const APP = (
    <Provider store = {store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(APP, document.getElementById('root'));

