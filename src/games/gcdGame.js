import { generateRandomNumber, makeQuestion } from '../utils.js';
import makeGame from '../index.js';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const runGame = () => {
  const firstNumber = generateRandomNumber(0, 100);
  const secondNumber = generateRandomNumber(0, 100);

  makeQuestion(`${firstNumber} ${secondNumber}`);
  const result = getGcd(firstNumber, secondNumber);

  return String(result);
};

export default makeGame(gameDescription, runGame);
