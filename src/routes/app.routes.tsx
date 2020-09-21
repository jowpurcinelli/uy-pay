import React from 'react';
import { Switch, Route } from 'react-router-dom';

/*
import { Resume } from '../pages/Resume';
import { SendReceive } from '../pages/SendReceive';
import { Transactions } from '../pages/Transactions';
import { Invoices } from '../pages/Invoices';
import { MyCards } from '../pages/MyCards';
*/
const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Resume} />
      <Route path="/send-receive" component={SendReceive} />
      <Route path="/transactions" component={Transactions} />
      <Route path="/invoices" component={Invoices} />
      <Route path="/my-cards" component={MyCards} />
    </Switch>
  );
};

export { AppRoutes };
