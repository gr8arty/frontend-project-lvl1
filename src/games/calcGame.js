import { generateRandomNumber, makeGame } from '../utils.js';

const calculate = (operation, op1, op2) => {
  switch (operation) {
    case '+':
      return op1 + op2;
    case '-':
      return op1 - op2;
    case '*':
      return op1 * op2;
    default:
      return NaN;
  }
};

const gameDescription = 'What is the result of the expression?';

const gameBody = () => {
  const firstNumber = generateRandomNumber(0, 30);
  const secondNumber = generateRandomNumber(0, 30);
  const mathOperators = ['+', '-', '*'];
  const randomOperatorsIndex = generateRandomNumber(0, mathOperators.length);
  const mathOperator = mathOperators[randomOperatorsIndex];

  console.log(`Question: ${firstNumber} ${mathOperator} ${secondNumber}`);
  const result = calculate(mathOperator, firstNumber, secondNumber);

  return String(result);
};

const brainCalc = makeGame(gameDescription, gameBody);

export default brainCalc;
