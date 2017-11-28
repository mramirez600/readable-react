import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

var NotFound = ({match}) => (
<div>{match.url} NOT FOUND</div>
)

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Switch>
      <Route path='/' component={App}/>
    </Switch>  
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);

registerServiceWorker();