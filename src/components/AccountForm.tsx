import * as React from 'react';
import Input from './../common/TextInput';

export interface AccountFormProps {
  account: Spento.Account;
  onChange: () => void;
}

class AccountForm extends React.Component < AccountFormProps, {} > {
  render() {
    return (
      <div className="container">
        <form>
          <h1>Accounts</h1>
          <Input name="accountName" label="Account Name" placeholder="set the account name" value={this.props.account.name} onChange={this.props.onChange}/>
          <br/>
          <Input name="description" label="Description" placeholder="set description" value={this.props.account.description} onChange={this.props.onChange}/>
          <br/>          
          <input type="radio" name="income" value="Expenses" checked={this.props.account.expenses} />
          <input type="radio" name="income" value="Income" checked={!this.props.account.expenses} />
        </form>
      </div>
    );
  }
}

export default AccountForm;