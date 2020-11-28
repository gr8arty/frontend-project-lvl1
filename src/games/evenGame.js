import generateRandomNumber from '../utils.js';
import makeGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const game = {};
game.description = 'Answer "yes" if the number is even, otherwise answer "no".';

game.runGame = () => {
  const randomNumber = generateRandomNumber(0, 100);
  game.question = randomNumber;

  return isEven(randomNumber) ? 'yes' : 'no';
};

export default makeGame(game);
