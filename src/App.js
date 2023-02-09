import './App.css';
import { Calculation } from './Calculation';

export const App = () => {
  return (
   <>
    <Calculation firstNumber={1} secondNumber={18}/>
    <Calculation firstNumber={30} secondNumber={100}/>
    <Calculation firstNumber={7} secondNumber={3.5}/>
   </>
  );
}

