import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';
import contactsStore, { persistor } from './components/ContactsStore';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={contactsStore}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
