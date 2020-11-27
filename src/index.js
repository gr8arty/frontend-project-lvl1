import readlineSync from 'readline-sync';

export default (gameDescription, runGame) => () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(gameDescription);
  const gameRounds = 3;
  let success = true;

  for (let round = 0; round < gameRounds; round += 1) {
    const roundResult = runGame();
    const playerChoice = readlineSync.question('Your answer: ');
    if (playerChoice !== roundResult) {
      success = false;
      console.log(`'${playerChoice}' is wrong answer ;(. Correct answer was '${roundResult}'.`);
      break;
    } else {
      console.log('Correct!');
    }
  }
  console.log(success ? `Congratulations, ${playerName}!` : `Let's try again, ${playerName}!`);
};
