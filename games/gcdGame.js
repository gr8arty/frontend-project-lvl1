import promptly from 'promptly';
import greeting from '../src/cli.js';
import { generateRandomNumber, gameRounds, printResultMessage } from '../src/index.js';

export default (async () => {
  const userName = await greeting();
  let success = true;

  for (let score = 0; score < gameRounds; score += 1) {
    const num1 = generateRandomNumber(0, 100);
    const num2 = generateRandomNumber(0, 100);

    const answer = (function gcd(a, b) {
      if (!b) {
        return a;
      }
      return gcd(b, a % b);
    }(num1, num2));

    console.log(`Question: ${num1} ${num2}`);
    const choice = Number(await promptly.prompt('Your answer: '));

    if (choice !== answer) {
      success = false;
      console.log(`'${choice}' is wrong answer ;(. Correct answer was '${answer}'.`);
      break;
    } else {
      console.log('Correct!');
    }
  }
  printResultMessage(success, userName);
});
