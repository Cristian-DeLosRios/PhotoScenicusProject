import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContextProvider from './context/ContextProvider';
const rootElement = document.getElementById('root');
//https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs
//import { useLocation } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  rootElement
);
