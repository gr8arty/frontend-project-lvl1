import promptly from 'promptly';
import greeting from '../src/cli.js';
import { generateRandomNumber, gameRounds, printResultMessage } from '../src/index.js';

export default (async () => {
  const userName = await greeting();

  console.log('What is the result of the expression?');
  let success = true;

  for (let i = 0; i < gameRounds; i += 1) {
    const number1 = generateRandomNumber(0, 30);
    const number2 = generateRandomNumber(0, 30);
    const operators = ['+', '-', '*'];
    const randomOperatorsIndex = Math.floor((Math.random() * operators.length));
    const operator = operators[randomOperatorsIndex];

    const answer = (function getAnswer() {
      switch (operator) {
        case '+':
          return number1 + number2;
        case '-':
          return number1 - number2;
        default:
          return number1 * number2;
      }
    }());

    console.log(`Question: ${number1} ${operator} ${number2}`);
    const choice = await promptly.prompt('Your answer: ');

    if (choice !== String(answer)) {
      success = false;
      console.log(`'${choice}' is wrong answer ;(. Correct answer was '${answer}'.`);
      break;
    } else {
      console.log('Correct!');
    }
  }
  printResultMessage(success, userName);
});
