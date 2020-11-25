import { generateRandomNumber, makeGame } from '../utils.js';

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

const brainGcd = makeGame(gameDescription, gameBody);

export default brainGcd;
