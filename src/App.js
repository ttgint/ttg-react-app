import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Routes from './Routes';
import './style/style.css';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
