import React from 'react';
import { Provider } from 'react-redux';
import { Login } from './src/pages/Login';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}
