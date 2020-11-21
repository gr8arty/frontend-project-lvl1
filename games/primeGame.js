import { generateRandomNumber } from '../src/index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameBody = () => {
  const randomNumber = generateRandomNumber(2, 100);
  const result = (function isPrime(n) {
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) return 'no';
    }
    return 'yes';
  }(randomNumber));
  console.log(`Question: ${randomNumber}`);
  return result;
};

export { gameDescription, gameBody };
