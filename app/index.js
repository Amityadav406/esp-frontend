import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import createReducer from './redux/reducers';
import rootSaga from './redux/rootSaga';
import App from './app';
import './i18n';
import { IconContext } from 'react-icons';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const sagaMiddleware = createSagaMiddleware();
const reducer = createReducer();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
});

sagaMiddleware.run(rootSaga);

const MOUNT_NODE = document.getElementById('app');

const root = ReactDOM.createRoot(MOUNT_NODE);
const theme = createTheme({
  palette: {
    primary: {
      main: '#6D5AE6',
    },
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: '0 4px 6px 0 rgba(16,25,40,0.1)',
          border: '1px solid #d5d7da',
          marginTop: '10px !important',
        },

        // list: {
        //   padding: '0',
        // },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: 'transparent',
          borderRadius: '0',
          boxShadow: 'none',
        },
      },
    },
  },
  typography: {
    fontFamily: ['Poppins'].join(','),
  },
});
root.render(
  <Provider store={store}>
    <IconContext.Provider value={{ className: 'react-icons' }}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {' '}
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </IconContext.Provider>
  </Provider>,
);
