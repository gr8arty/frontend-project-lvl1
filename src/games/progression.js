import generateRandomNumber from '../utils.js';
import makeGame from '../index.js';

const generateProgression = (start, step, len) => {
  let current = start;
  const progression = [];
  for (let i = 1; i <= len; i += 1) {
    progression.push(current);
    current += step;
  }
  return progression;
};

const description = 'What number is missing in the progression?';

const prepareGame = () => {
  const progression = generateProgression(
    generateRandomNumber(0, 50),
    generateRandomNumber(1, 8), 10,
  );
  const randomProgressionIndex = generateRandomNumber(0, progression.length);

  const answer = String(progression[randomProgressionIndex]);
  const maskSymbol = '..';
  progression[randomProgressionIndex] = maskSymbol;
  const question = progression.join(' ');

  return [question, answer];
};

const game = { description, prepareGame };

export default makeGame(game);
