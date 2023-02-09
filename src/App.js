import './App.css';
import { Calculation } from './Calculation';
import { Darkmode } from './Darkmode';

const App = () => {

  return (
   <>
	<div className='card bg-transparent border-secondary mb-3'>
		<div class="card-body">
		<Darkmode/>
		<Calculation firstNumber={1} secondNumber={18} groupNumber={1}/>
		<Calculation firstNumber={30} secondNumber={100} groupNumber={2}/>
		<Calculation firstNumber={7} secondNumber={3.5} groupNumber={3}/>
		</div> 
	</div>
   </>
  );
}

export default App;