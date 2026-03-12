import { useState } from 'react';

export const useCalculator = () => {
  const [display, setDisplay] = useState('0');
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  const [operator, setOperator] = useState<'+' | '-' | null>(null);

  const handleDigit = (digit: string) => {
    setDisplay(prev => prev === '0' ? digit : prev + digit);
  };

  const handleOperator = (op: '+' | '-') => {
    setFirstOperand(parseFloat(display));
    setOperator(op);
    setDisplay('0');
  };

  const handleEquals = () => {
    if (operator === null || firstOperand === null) return;
    const second = parseFloat(display);
    const result = operator === '+' ? firstOperand + second : firstOperand - second;
    setDisplay(result.toString());
    setFirstOperand(null);
    setOperator(null);
  };

  const handleClear = () => {
    setDisplay('0');
    setFirstOperand(null);
    setOperator(null);
  };

  return { display, handleDigit, handleOperator, handleEquals, handleClear };
};
