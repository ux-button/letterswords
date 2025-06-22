import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { App } from './App.jsx';
import { LogInPage } from './features/login-page/LogInPage.jsx';
import { GroupPage } from './features/group-page/groupPage.jsx';
import { WordsPage } from './features/words-page/wordsPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <body className="bg-mono-8">
      <WordsPage />
    </body>
  </StrictMode>,
);
