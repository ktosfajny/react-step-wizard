import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1. instalujesz react step wizard:  yarn add react-step-wizard
// 2. w App.tsx importujesz komponent Wizard i wyświetlasz go (może być na dowolnym miejscu renderowany)
// 3. w Wizard.tsx importujesz 'StepWizard' i wrzucasz do niego dzieci które będą stepami
// 4. w stepach masz dostęp do róznych opcji

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
