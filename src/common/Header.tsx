import * as React from 'react';
import {Link} from 'react-router';
import './../App.css';
const logo = require('./../logo.svg');

export class Header extends React.Component < {}, {} > {
  render() {
    return (
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <img alt="Brand" src={logo} className="App-logo"/>
          </a>
          <ul className="nav navbar-nav">
            <li>
              <Link to="home">Home</Link>
            </li>
            <li>
              <Link to="accounts">Accounts</Link>
            </li>
          </ul>
        </div>
        <div className="jumbotron">
          {this.props.children}
        </div>
      </div>
    );
  }
}
