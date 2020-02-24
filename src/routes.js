import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contacts" exact component={Contacts} />
    </Switch>
  );
}
