import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { DataProvider } from './contexts/DataContext';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import AuthProvider from './contexts/AuthContext';



ReactDOM.render(
  <AuthProvider>
    <DataProvider>
      <CssBaseline />

      <App />
    </DataProvider>
  </AuthProvider>

  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
