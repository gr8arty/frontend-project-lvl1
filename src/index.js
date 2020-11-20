import promptly from 'promptly';
import greeting from './cli.js';

export const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const runGame = async (gameDescription, gameBody) => {
  const gameRounds = 3;
  const playerName = await greeting();
  console.log(gameDescription);
  let success = true;

  for (let round = 0; round < gameRounds; round += 1) {
    const roundResult = gameBody();
    const playerChoice = await promptly.prompt('Your answer: ');
    if (playerChoice !== roundResult) {
      success = false;
      console.log(`'${playerChoice}' is wrong answer ;(. Correct answer was '${roundResult}'.`);
      break;
    } else {
      console.log('Correct!');
    }
  }
  console.log(success ? `Congratulation, ${playerName}!` : `Let's try again, ${playerName}!`);
};
