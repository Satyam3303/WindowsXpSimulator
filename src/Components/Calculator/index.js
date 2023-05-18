import React, { useState } from 'react';
import './index.css';

const Calculator = () => {

  const [isClicked, setIsClicked] = useState(true);

  const handleClose = () => {
    setIsClicked(!isClicked);

  };


  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleButtonPress = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clearDisplay();
    } else {
      setDisplay(display === '0' ? value : display + value);
    }
  };


  const calculateResult = () => {
    try {
      const result = eval(equation + display);
      setDisplay(result.toString());
      setEquation('');
    } catch (error) {
      console.log('Error calculating result:', error);
      setDisplay('Error');
      setEquation('');
    }
  };

  const clearDisplay = () => {
    setDisplay('0');
    setEquation('');
  };

  return (
    <>
    {isClicked &&
    <div className="calculator">
      <button className='button2' onClick={() => handleClose()}>X</button>
      <div className="display">{display}</div>
      <div className="keypad">
        <div className="row">
          <button onClick={() => handleButtonPress('C')}>C</button>
          <button onClick={() => handleButtonPress('(')}>(</button>
          <button onClick={() => handleButtonPress(')')}>)</button>
          <button onClick={() => handleButtonPress('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonPress('7')}>7</button>
          <button onClick={() => handleButtonPress('8')}>8</button>
          <button onClick={() => handleButtonPress('9')}>9</button>
          <button onClick={() => handleButtonPress('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonPress('4')}>4</button>
          <button onClick={() => handleButtonPress('5')}>5</button>
          <button onClick={() => handleButtonPress('6')}>6</button>
          <button onClick={() => handleButtonPress('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonPress('1')}>1</button>
          <button onClick={() => handleButtonPress('2')}>2</button>
          <button onClick={() => handleButtonPress('3')}>3</button>
          <button onClick={() => handleButtonPress('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonPress('0')}>0</button>
          <button onClick={() => handleButtonPress('.')}>.</button>
          <button onClick={() => handleButtonPress('=')}>=</button>
        </div>
      </div>
    </div>
    }
    </>
  );
};

export default Calculator;
