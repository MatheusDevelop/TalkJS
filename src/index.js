import React from 'react';
import ReactDOM from 'react-dom';

import './style.css'

import App from './App';
import * as serviceWorker from './serviceWorker';
// Material UI
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './theme'

// Redux
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Reducers from './reducers'
const store = createStore(Reducers);

ReactDOM.render(
  <React.StrictMode>
    
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
    </ThemeProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
