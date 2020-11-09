import promptly from 'promptly';
import greeting from './cli.js';
import generateRandomNumber from './functions.js';

export default (async () => {
  const userName = await greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let success = true;
  const gameRounds = 3;
  for (let i = 0; i < gameRounds; i += 1) {
    const randomNumber = generateRandomNumber(0, 100);
    const answer = (randomNumber % 2 === 0 ? 'yes' : 'no');

    console.log(`Question: ${randomNumber}`);
    const choice = await promptly.prompt('Your answer: ');
    if (choice !== answer) {
      success = false;
      console.log(`'${choice}' is wrong answer ;(. Correct answer was '${answer}'.`);
      break;
    } else {
      console.log('Correct!');
    }
  }
  console.log(success ? `Congratulation, ${userName}!` : `Let's try again, ${userName}!`);
});
