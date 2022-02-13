import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Root from '@pages/Root';
import '@/index.css';
import '@/i18n';

ReactDOM.render(
  <Suspense fallback="loading">
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);
