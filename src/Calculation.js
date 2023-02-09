import './App.css';

export const Calculation = ({firstNumber, secondNumber, groupNumber}) => {
  return (
    <div className='container'>
        <h2>Group {groupNumber}</h2>
        <h3>
            {firstNumber} + {secondNumber} = {firstNumber + secondNumber}
        </h3>
        
        <h3> 
            {firstNumber} - {secondNumber} = {firstNumber - secondNumber}
        </h3>

        <h3> 
            {firstNumber} * {secondNumber} = {firstNumber * secondNumber}
        </h3>

        <h3> 
            {firstNumber} / {secondNumber} = {firstNumber / secondNumber}
        </h3>
    </div>
  );
}


