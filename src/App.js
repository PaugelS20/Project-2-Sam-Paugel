import './App.css';
import { useState } from 'react';
import { Calculation } from './Calculation';
import { Darkmode } from './Darkmode';

const App = () => {

  return (
   <>
   		<Darkmode/>
		<Calculation firstNumber={1} secondNumber={18} groupNumber={1}/>
		<Calculation firstNumber={30} secondNumber={100} groupNumber={2}/>
		<Calculation firstNumber={7} secondNumber={3.5} groupNumber={3}/>
   </>
  );
}

export default App;