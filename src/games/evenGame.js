import generateRandomNumber from '../utils.js';
import runGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameBody = () => {
  const randomNumber = generateRandomNumber(0, 100);
  console.log(`Question: ${randomNumber}`);

  const result = isEven(randomNumber) ? 'yes' : 'no';

  return result;
};

export default runGame(gameDescription, gameBody);
