import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import './index.css';
import './fonts.css';

// i18n
import './i18n';

// Provider
import { Providers } from './providers.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
);
