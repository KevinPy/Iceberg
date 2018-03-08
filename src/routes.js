import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import AppContainer from './app/redux/containers/App';
import NotFoundContainer from './app/redux/containers/NotFound';

const Routes = props => {
  const { history } = props;
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={AppContainer}/>
        <Route component={NotFoundContainer}/>
      </Switch>
    </ConnectedRouter>
  );
};

export default Routes;