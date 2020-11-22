import { generateRandomNumber } from '../src/index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameBody = () => {
  const randomNumber = generateRandomNumber(0, 100);
  console.log(`Question: ${randomNumber}`);

  const result = randomNumber % 2 === 0 ? 'yes' : 'no';

  return result;
};

export { gameDescription, gameBody };
