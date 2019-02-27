import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import Routes from './Routes';
import reducers from './reducers';
import logout from './actions/logout';
import './style/style.css';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

axios.interceptors.response.use(null, error => {
  // Do something with response error
  if (error.response.status === 401) {
    store.dispatch(logout());
  }
  return Promise.reject(error);
});

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);

export default App;
