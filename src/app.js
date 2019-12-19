import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import Keycloak from 'keycloak-js';
import { Spin } from 'antd';
import styled from 'styled-components';
import { KeycloakProvider } from '@react-keycloak/web';
import Routes from './routes';
import reducers from './reducers';
import logout from './actions/logout';

const keycloak = new Keycloak({
  promiseType: 'native',
  realm: 'ttg',
  url: 'http://localhost:8085/auth/',
  clientId: 'test-app'
});

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);
axios.interceptors.response.use(null, error => {
  if (error.response.status === 401) {
    store.dispatch(logout());
  }
  return Promise.reject(error);
});

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const KeycloakLoading = styled(Spin)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const App = () => (
  <KeycloakProvider
    keycloak={keycloak}
    LoadingComponent={<KeycloakLoading size="large" />}
    initConfig={{
      onLoad: 'login-required'
    }}
  >
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  </KeycloakProvider>
);

export default App;
