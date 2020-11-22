import { generateRandomNumber } from '../src/index.js';

const gameDescription = 'What is the result of the expression?';

const gameBody = () => {
  const firstNumber = generateRandomNumber(0, 30);
  const secondNumber = generateRandomNumber(0, 30);
  const mathOperators = ['+', '-', '*'];
  const randomOperatorsIndex = Math.floor((Math.random() * mathOperators.length));
  const mathOperator = mathOperators[randomOperatorsIndex];

  console.log(`Question: ${firstNumber} ${mathOperator} ${secondNumber}`);

  const result = (function calculate(sign) {
    if (sign === '+') return firstNumber + secondNumber;
    if (sign === '-') return firstNumber - secondNumber;
    return firstNumber * secondNumber;
  }(mathOperator));

  return String(result);
};

export { gameDescription, gameBody };
