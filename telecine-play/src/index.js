import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Containers/Home'
import Register from './UI/Register'
import RegisterSuccess from './UI/RegisterSucess'
import * as serviceWorker from './serviceWorker';
// import registerServiceWorker from './ServiceWorker';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/Home" component={Home}/>
            <Route path="/Register" component={Register}/>
            <Route path="/RegisterSuccess" component={RegisterSuccess}/>
        </Route>
    </Router>
    
    , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
