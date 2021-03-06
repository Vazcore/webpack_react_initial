import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './pages/Layout';
import Featured from './pages/Featured';
import Archive from './pages/Archive';
import Stocks from './pages/Stocks';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Featured}></IndexRoute>
            <Route path="archive" component={Archive}></Route>
            <Route path="stocks(/:stockName)" component={Stocks}></Route>
        </Route>
    </Router>
    , app);