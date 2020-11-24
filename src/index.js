import promptly from 'promptly';

export default async (gameDescription, gameBody) => {
  console.log('Welcome to the Brain Games!');
  const playerName = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameDescription);

  const gameRounds = 3;
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
  console.log(success ? `Congratulations, ${playerName}!` : `Let's try again, ${playerName}!`);
};
