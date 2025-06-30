import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './Store';
import { Provider } from 'react-redux';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/* this {store} prob is pass to the provider component and makes the store, available to all the components in our react tag */} 
     <App />
  </Provider>
);
