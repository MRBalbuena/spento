import {accounts} from './accountsData';

interface AccountsApi {
  getAllAccounts : () => Spento.Account[];
  saveAccount : (account : Spento.Account) => Spento.Account;
}

var generateId = () => {
  var ids = accounts.map((a) => {
    return a.accountId;
  });
  var sorted = ids.sort((a, b) => a - b);
  return sorted[sorted.length - 1] + 1;
}

export var accountsApi : AccountsApi = {
  getAllAccounts: () => {
    return accounts
  },
  saveAccount: (account : Spento.Account) => {
    if (account.accountId) {
      accounts.forEach((acc, i) => {
        if (acc.accountId == account.accountId) 
          accounts.splice(i, 1, account);
        }
      )
    } else {
      account.accountId = generateId();
      accounts.push(account);
    }
    return account;
  }
}