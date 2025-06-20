import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { App } from './App.jsx';
import { LogInPage } from './features/login-page/LogInPage.jsx';
import { GroupPage } from './features/grout-page/groupPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GroupPage />
  </StrictMode>,
);
