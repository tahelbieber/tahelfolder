
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { add, subtract, multiply, divide } from './calculator';

function Calculator() {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');

  const handleNumberChange = (e) => {
    const { value } = e.target;
    if (!operator) {
      setNum1(value);
    } else {
      setNum2(value);
    }
  };

  const handleOperatorChange = (e) => {
    const { value } = e.target;
    setOperator(value);
  };

  const calculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    switch (operator) {
      case '+':
        setResult(add(number1, number2));
        break;
      case '-':
        setResult(subtract(number1, number2));
        break;
      case '*':
        setResult(multiply(number1, number2));
        break;
      case '/':
        setResult(divide(number1, number2));
        break;
      default:
        setResult(0);
    }
  };

  return (
    <div>
      <input type="text" value={num1} onChange={handleNumberChange} />
      <input type="text" value={operator} onChange={handleOperatorChange} />
      <input type="text" value={num2} onChange={handleNumberChange} />
      <button onClick={calculate}>=</button>
      <input type="text" value={result} readOnly />
    </div>
  );
}

ReactDOM.render(<Calculator />, document.getElementById('root'));
