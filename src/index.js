import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { ThemeProvider } from './ThemeContext';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
