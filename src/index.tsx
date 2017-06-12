import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
// import App from './App';
import {Header} from './common/Header';
import {Home} from './components/Home';
import {Accounts} from './components/Accounts';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="/" component={Header}>
    <IndexRoute component={Home}/>
    <Route path="accounts" component={Accounts}/>
    <Route path="home" component={Home}/>
  </Route>
</Router>, document.getElementById('root')as HTMLElement);
registerServiceWorker();
