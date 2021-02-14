import StepWizard from 'react-step-wizard'; // importujesz StepWizard na stepy z biblioteki do stepów

import Step from './Step'; // importujesz zrobiony przez siebie komponent który edzie stepem
export interface WizardProps {}

export const Wizard: React.FC<WizardProps> = () => {


  return (
    // StepWizard to wrapper na stepy, jak ustawisz mu isHashEnabled na true to możesz dla dzieci podać hashKey który będzie #url w linku
    <StepWizard isHashEnabled> 
      <Step hashKey="basic" />
      <Step hashKey="register" />
      <Step hashKey="confirm" />
    </StepWizard>
  );
};
