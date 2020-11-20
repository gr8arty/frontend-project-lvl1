import { generateRandomNumber } from '../src/index.js';

const gameDescription = 'What is the result of the expression?';

const gameBody = () => {
  const num1 = generateRandomNumber(0, 30);
  const num2 = generateRandomNumber(0, 30);
  const operators = ['+', '-', '*'];
  const randomOperatorsIndex = Math.floor((Math.random() * operators.length));
  const operator = operators[randomOperatorsIndex];

  console.log(`Question: ${num1} ${operator} ${num2}`);

  const result = (function getResult() {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      default:
        return num1 * num2;
    }
  }());

  return String(result);
};

export { gameDescription, gameBody };
