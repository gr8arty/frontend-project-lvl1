import { generateRandomNumber } from '../src/index.js';

const gameDescription = 'What number is missing in the progression?';

const gameBody = () => {
  const startOfRange = generateRandomNumber(0, 15);
  const endOfRange = 100;
  const step = generateRandomNumber(2, 8);
  const progression = [];

  const result = (function generateProgression(start, end) {
    for (let i = start; i <= end; i += step) {
      if (progression.length !== 10) progression.push(i);
    }
    const randomProgressionIndex = generateRandomNumber(0, progression.length);
    const hiddenNumber = progression[randomProgressionIndex];
    progression[randomProgressionIndex] = '..';
    console.log(`Question: ${progression.join(' ')}`);

    return hiddenNumber;
  }(startOfRange, endOfRange));
  return String(result);
};

export { gameDescription, gameBody };
