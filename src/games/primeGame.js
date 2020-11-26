import generateRandomNumber from '../utils.js';
import runGame from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameBody = () => {
  const randomNumber = generateRandomNumber(2, 100);
  console.log(`Question: ${randomNumber}`);
  const result = isPrime(randomNumber) ? 'yes' : 'no';

  return result;
};

export default runGame(gameDescription, gameBody);
