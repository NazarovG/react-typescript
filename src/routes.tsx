import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IndexPage from '@pages/indexPage';

const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <IndexPage />
      </Route>
    </Switch>
  );
};

export default Routes;
