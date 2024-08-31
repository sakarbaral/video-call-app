import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import { ContextProvider } from './components/SocketContext';

import './styles.css';

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root'),
);