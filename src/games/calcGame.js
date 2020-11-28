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

const game = {};
game.description = 'What is the result of the expression?';

game.runGame = () => {
  const firstNumber = generateRandomNumber(0, 30);
  const secondNumber = generateRandomNumber(0, 30);
  const mathOperators = ['+', '-', '*'];
  const randomOperatorsIndex = generateRandomNumber(0, mathOperators.length);
  const mathOperator = mathOperators[randomOperatorsIndex];

  game.question = `${firstNumber} ${mathOperator} ${secondNumber}`;

  const result = calculate(mathOperator, firstNumber, secondNumber);
  return String(result);
};

export default makeGame(game);
