const data = [
  {
    Date: '8/25/2017',
    Description: 'Netflix',
    'Original Description': 'Netflix.com',
    Amount: '9.99',
    'Transaction Type': 'debit',
    Category: 'Online TV & Movies',
    'Account Name': 'CHASE FREEDOM SIGNATURE',
    Labels: '',
    Notes: ''
  },
  {
    Date: '11/14/2016',
    Description: 'Transfer from Checking',
    'Original Description': 'Deposit - Online Banking Transfer',
    Amount: '28.00',
    'Transaction Type': 'credit',
    Category: 'Transfer',
    'Account Name': 'Savings',
    Labels: '',
    Notes: ''
  },
  {
    Date: '5/03/2017',
    Description: 'Shell',
    'Original Description': 'SHELL OIL',
    Amount: '23.06',
    'Transaction Type': 'debit',
    Category: 'Gas & Fuel',
    'Account Name': 'CHASE FREEDOM SIGNATURE',
    Labels: '',
    Notes: ''
  },
  {
    Date: '10/11/2013',
    Description: 'Transfer from Savings',
    'Original Description': 'Deposit - Online Banking Transfer',
    Amount: '75.00',
    'Transaction Type': 'debit',
    Category: 'Transfer',
    'Account Name': 'Checking',
    Labels: '',
    Notes: ''
  },
  {
    Date: '9/18/2017',
    Description: 'Chase Epay',
    'Original Description':
      'External Withdrawal - CHASE CREDExternal Withdrawal - CHASE CREDIT CRD  - EPAY',
    Amount: '123.00',
    'Transaction Type': 'debit',
    Category: 'Credit Card Payment',
    'Account Name': 'Checking',
    Labels: '',
    Notes: ''
  },
  {
    Date: '9/18/2017',
    Description: 'Thank You Web',
    'Original Description': 'Payment Thank You - Web',
    Amount: '100.00',
    'Transaction Type': 'credit',
    Category: 'Credit Card Payment',
    'Account Name': 'CHASE FREEDOM SIGNATURE',
    Labels: '',
    Notes: ''
  },
  {
    Date: '7/25/16',
    Description: 'Interest Charge Purchases',
    'Original Description': 'Interest Charge on Purchases',
    Amount: '0',
    'Transaction Type': 'credit',
    Category: 'Finance Charge',
    'Account Name': 'Visa Credit Card',
    Labels: '',
    Notes: ''
  },
  {
    Date: '6/15/14',
    Description: 'IRA Contribution',
    'Original Description': 'Investment Co.',
    Amount: '1000',
    'Transaction Type': 'debit',
    Category: 'Investments',
    'Account Name': 'Checking',
    Labels: '',
    Notes: ''
  },
  {
    Date: '8/10/17',
    Description: 'IRA Contribution',
    'Original Description': 'Investment Co.',
    Amount: '1000',
    'Transaction Type': 'debit',
    Category: 'Investment Transfer',
    'Account Name': 'Checking',
    Labels: '',
    Notes: ''
  }
];

export const dataWithEvenTransferBalance = data.concat([
  {
    Date: '1/20/2011',
    Description: 'Transfer from Savings',
    'Original Description': 'Deposit - Online Banking Transfer',
    Amount: '47.00',
    'Transaction Type': 'credit',
    Category: 'Transfer',
    'Account Name': 'Checking',
    Labels: '',
    Notes: ''
  }
]);

export default data;
