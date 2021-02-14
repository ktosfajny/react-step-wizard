export interface StepProps {
  currentStep?: number;
  firstStep?: () => void;
  goToStep?: (step: number) => void;
  isActive?: boolean;
  lastStep?: () => void;
  nextStep?: () => void;
  previousStep?: () => void;
  totalSteps?: number;
  transitions?: undefined;
  hashKey?: string; // ten prop do którego można podawać URL
}

const Step: React.FC<StepProps> = (props) => {

  // musisz zrobić sobie takie sprawdzenie żeby nie było błędu że nie można wywolac obiektu któy jest undefined
  const goToGivenStep = (step: number) => {
    if (props.goToStep) {
      props.goToStep(step);
    }
  };
  return (
    <>
      {/* variables */}
      <h2>Step : {props.currentStep}</h2>
      <p>Total Steps: {props.totalSteps}</p>
      <p>Is Active: {props.isActive ? 'jest active' : 'nie jest active'}</p>

     
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        
          {/* ------- functions -----------------*/}
        <button onClick={props.previousStep}>Previous Step</button>
        <button onClick={props.nextStep}>Next Step</button>
        <button onClick={() => goToGivenStep(2)}>Step 2</button>
        <button onClick={props.firstStep}>First Step</button>
        <button onClick={props.lastStep}>Last Step</button>

      </div>
    </>
  );
};

export default Step;
