import './App.css';
import { Calculation } from './Calculation';

const App = () => {
  return (
   <>
   <Calculation firstNumber={1} secondNumber={18} groupNumber={1}/>
   <Calculation firstNumber={30} secondNumber={100} groupNumber={2}/>
   <Calculation firstNumber={7} secondNumber={3.5} groupNumber={3}/>
   </>
  );
}

export default App;