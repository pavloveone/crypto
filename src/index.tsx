import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import { Provider } from 'react-redux';
import { store } from './services/store';

import { Server } from "miragejs";
import { directions, filter } from './utils/data';

new Server({
  routes() {
    this.namespace = "api";
    this.get("/directions/", () => {
      return directions;
    });
    this.get("/filter/", () => {
      return filter;
    })
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>

);