import generateRandomNumber from '../utils.js';
import makeGame from '../index.js';

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

const description = 'What is the result of the expression?';

const prepareGame = () => {
  const firstNumber = generateRandomNumber(0, 30);
  const secondNumber = generateRandomNumber(0, 30);
  const mathOperators = ['+', '-', '*'];
  const randomOperatorsIndex = generateRandomNumber(0, mathOperators.length);
  const mathOperator = mathOperators[randomOperatorsIndex];

  const question = `${firstNumber} ${mathOperator} ${secondNumber}`;
  const answer = String(calculate(mathOperator, firstNumber, secondNumber));

  return [question, answer];
};

const game = { description, prepareGame };

export default makeGame(game);
