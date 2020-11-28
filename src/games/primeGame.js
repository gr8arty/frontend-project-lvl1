import generateRandomNumber from '../utils.js';
import makeGame from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const game = {};
game.description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

game.runGame = () => {
  const randomNumber = generateRandomNumber(2, 100);
  game.question = randomNumber;

  return isPrime(randomNumber) ? 'yes' : 'no';
};

export default makeGame(game);
