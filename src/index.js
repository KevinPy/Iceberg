import './assets/styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App.jsx';
import NotFound from './js/components/NotFound.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App}/>
      <Route component={NotFound}/>
    </Switch>
  </Router>,
  document.getElementById('app')
);