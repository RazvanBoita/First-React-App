import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FeaturesContextProvider } from './components/FeaturesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FeaturesContextProvider>
      <App />
    </FeaturesContextProvider>
  </React.StrictMode>
);

