import { generateRandomNumber, makeQuestion } from '../utils.js';
import makeGame from '../index.js';

const generateProgression = () => {
  const progression = [];
  const start = generateRandomNumber(0, 15);
  const step = generateRandomNumber(2, 8);
  for (let i = start; i <= 100; i += step) {
    if (progression.length !== 10) progression.push(i);
  }
  return progression;
};

const gameDescription = 'What number is missing in the progression?';
const runGame = () => {
  const progression = generateProgression();

  const randomProgressionIndex = generateRandomNumber(0, progression.length);
  const hiddenNumber = progression[randomProgressionIndex];
  const maskSymbol = '..';
  progression[randomProgressionIndex] = maskSymbol;
  makeQuestion(progression.join(' '));

  return String(hiddenNumber);
};

export default makeGame(gameDescription, runGame);
