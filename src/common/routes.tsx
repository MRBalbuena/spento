import * as React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Header from './../common/Header';
import Home from './../components/Home';
import AccountManager from './../components/AccountManager';
import Movements from './../components/Movements';
import Groups from './../components/Groups';
import Config from './../components/Config';

var routes = (
<Router history={browserHistory}>
  <Route path="/" component={Header}>
    <IndexRoute component={Home}/>    
    <Route path="home" component={Home}/>
    <Route path="accounts" component={AccountManager}/>
    <Route path="groups" component={Groups}/>
    <Route path="movements" component={Movements}/>
    <Route path="config" component={Config}/>
  </Route>
</Router>);

export default routes;