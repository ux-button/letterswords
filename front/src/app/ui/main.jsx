import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Styles
import '../../shared/style/index.css';

// Pages
import { SignInPage } from '../../pages/authorisation/ui/SignInPage.jsx';
import { GroupPage } from '../../pages/wordsGroup/ui/GroupPage.jsx';
import { WordsPage } from '../../pages/wordsList/ui/WordsPage.jsx';
import { MutliAnswerCardPage } from '../../pages/multiAnswerCard/ui/MutliAnswerCardPage.jsx';
import { FlipcardPage } from '../../pages/flipcard/ui/FlipCardPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FlipcardPage />
  </StrictMode>,
);
