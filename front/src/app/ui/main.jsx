import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../../shared/style/index.css';

import { SignInPage } from '../../pages/signin/ui/SignInPage.jsx';
import { GroupPage } from '../../pages/wordsgroup/ui/GroupPage.jsx';
import { WordsPage } from '../../pages/wordslist/ui/WordsPage.jsx';
// import { FlipCardPage } from '../../pages/flipcard/ui/FlipCardPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WordsPage />
  </StrictMode>,
);
