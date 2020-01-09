import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// import { reducer } from './utils/reducer';

import {BrowserRouter as Router} from 'react-router-dom';
import './index.css'; 
import App from './App';

// const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    // <Provider store={store}>
    <Router>
    <App />
    </Router>
    // </Provider>
    , document.getElementById('root')
);

