import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './Store';
import { Provider } from 'react-redux';
import App from './App';
import {positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const option = {
  timeout : 5000,
  position: positions.BOTTOM_CENTER,
  transition : transitions.SCALE,
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
  <AlertProvider template = {AlertTemplate} {...option}> {/* this crabs the app with the notification provider using the configuration option defined earlier and it also  integrated redux for state management*/}
   <App />
  </AlertProvider>{/* this {store} prob is pass to the provider component and makes the store, available to all the components in our react tag */} 
   
  </Provider>
);
