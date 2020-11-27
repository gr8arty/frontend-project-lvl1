import { generateRandomNumber, makeQuestion } from '../utils.js';
import makeGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const runGame = () => {
  const randomNumber = generateRandomNumber(0, 100);
  makeQuestion(randomNumber);

  return isEven(randomNumber) ? 'yes' : 'no';
};

export default makeGame(gameDescription, runGame);
