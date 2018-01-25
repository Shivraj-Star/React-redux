
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'
import App from './components/MainScript';
import AllPostComponent from './components/AllPost.Component';
import SinglePostComponent from './components/SinglePost.Component';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

let router = <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={AllPostComponent}></IndexRoute>
            <Route path="/singlepost/:codeId" component={SinglePostComponent}></Route>
        </Route>
    </Router>
</Provider>


ReactDOM.render(router, document.getElementById('content'));
