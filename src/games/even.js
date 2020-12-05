import generateRandomNumber from '../utils.js';
import makeGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const prepareGame = () => {
  const question = generateRandomNumber(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const game = { description, prepareGame };

export default makeGame(game);
