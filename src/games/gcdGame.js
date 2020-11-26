import generateRandomNumber from '../utils.js';
import runGame from '../index.js';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gameBody = () => {
  const firstNumber = generateRandomNumber(0, 100);
  const secondNumber = generateRandomNumber(0, 100);

  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const result = getGcd(firstNumber, secondNumber);

  return String(result);
};

export default runGame(gameDescription, gameBody);
