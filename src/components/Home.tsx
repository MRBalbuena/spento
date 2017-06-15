import * as React from 'react';
import {Link} from 'react-router';

class Home extends React.Component < {}, {} > {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <div className="col-xs-8 col-sm-6"><h2><Link to="accounts">Accounts</Link></h2></div>
            <div className="col-xs-8 col-sm-6"><h2>Groups</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-9">
            <div className="col-xs-8 col-sm-6"><h2>Movements</h2></div>
            <div className="col-xs-8 col-sm-6"><h2>Stats</h2></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;