import { generateRandomNumber } from '../src/index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gameBody = () => {
  const num1 = generateRandomNumber(0, 100);
  const num2 = generateRandomNumber(0, 100);
  console.log(`Question: ${num1} ${num2}`);
  const result = (function gcd(a, b) {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  }(num1, num2));
  return String(result);
};

export { gameDescription, gameBody };
