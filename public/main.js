import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import App from './components/App.js';
import Hello from './components/Hello.js';
import World from './components/World.js';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Hello}/>
            <Route path='/world' component={World}/>
        </Route>
    </Router>
    , document.getElementById('app'));