import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import styled from 'styled-components';
import Routes from './routes';
import reducers from './reducers';
import logout from './actions/logout';

const Wrapper = styled('div')`
  background-color: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen';
  h1 {
    color: ${props => props.theme.body};
  }
`;

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
  <Wrapper>
    <h1>Test</h1>
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  </Wrapper>
);

export default App;
