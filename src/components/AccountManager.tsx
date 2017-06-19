import * as React from 'react';
import AccountForm from './AccountForm';

export interface AccountManagerProps {}

export interface AccountManagerState {
  account : Spento.Account;
}
class AccountManager extends React.PureComponent < AccountManagerProps,
AccountManagerState > {
  public state : AccountManagerState;
  constructor() {
    super();
    this.state = {
      account: {
        name: '',
        description: '',
        expenses: true
      }
    };
  }
  onChange() {
    return;
  }
  render() {
    return (<AccountForm account={this.state.account} onChange={this.onChange}/>);
  }
}

export default AccountManager;
