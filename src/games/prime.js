import generateRandomNumber from '../utils.js';
import makeGame from '../index.js';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prepareGame = () => {
  const question = generateRandomNumber(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const game = { description, prepareGame };

export default makeGame(game);
