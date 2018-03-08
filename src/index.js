import 'normalize.css';
import './assets/styles/main.scss';
import React from 'react';
import Provider from 'react-redux';
import ReactDOM from 'react-dom';
import store, { history } from './app/redux/store';
import Routes from './routes';

ReactDOM.render(
  <Provider store={store}>
    <Routes history={history} />
  </Provider>,
  document.getElementById('app')
);