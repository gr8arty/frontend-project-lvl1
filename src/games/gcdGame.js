import generateRandomNumber from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gameBody = () => {
  const firstNumber = generateRandomNumber(0, 100);
  const secondNumber = generateRandomNumber(0, 100);

  console.log(`Question: ${firstNumber} ${secondNumber}`);

  const result = (function getGcd(a, b) {
    if (!b) {
      return a;
    }
    return getGcd(b, a % b);
  }(firstNumber, secondNumber));

  return String(result);
};

export { gameDescription, gameBody };
