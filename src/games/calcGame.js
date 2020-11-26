import generateRandomNumber from '../utils.js';
import runGame from '../index.js';

const calculate = (operator, op1, op2) => {
  switch (operator) {
    case '+':
      return op1 + op2;
    case '-':
      return op1 - op2;
    case '*':
      return op1 * op2;
    default:
      throw new Error(`Unknown operator:, ${operator}`);
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

export default runGame(gameDescription, gameBody);
