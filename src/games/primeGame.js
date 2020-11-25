import { generateRandomNumber, makeGame } from '../utils.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    return num % i === 0;
  }
  return false;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameBody = () => {
  const randomNumber = generateRandomNumber(2, 100);
  console.log(`Question: ${randomNumber}`);
  const result = isPrime(randomNumber) ? 'no' : 'yes';

  return result;
};

const brainPrime = makeGame(gameDescription, gameBody);

export default brainPrime;
