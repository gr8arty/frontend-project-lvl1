import readlineSync from 'readline-sync';

export default (game) => () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(game.description);
  const gameRounds = 3;
  let success = true;

  for (let round = 0; round < gameRounds; round += 1) {
    const roundResult = game.runGame();
    console.log(`Question: ${game.question}`);
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
