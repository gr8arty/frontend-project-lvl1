import generateRandomNumber from '../utils.js';
import makeGame from '../index.js';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

const description = 'Find the greatest common divisor of given numbers.';

const prepareGame = () => {
  const firstNumber = generateRandomNumber(0, 100);
  const secondNumber = generateRandomNumber(0, 100);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(getGcd(firstNumber, secondNumber));

  return [question, answer];
};

const game = { description, prepareGame };

export default makeGame(game);
