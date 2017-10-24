import './assets/styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/components/App/App.jsx';
import NotFound from './app/components/NotFound/NotFound.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'normalize.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App}/>
      <Route component={NotFound}/>
    </Switch>
  </Router>,
  document.getElementById('app')
);