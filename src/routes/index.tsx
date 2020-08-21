import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Main from '../pages/Main';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/home" component={Main} isPrivate />
    </Switch>
  );
};

export default Routes;
