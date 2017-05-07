import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import {getCharacters} from './reducers/characters/actions';
import './index.css';

const store = createStore(
  reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

store.dispatch(getCharacters());

const root = document.getElementById('root');


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
