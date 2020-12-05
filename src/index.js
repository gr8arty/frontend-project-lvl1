import readlineSync from 'readline-sync';

export default (game) => () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(game.description);
  const totalRounds = 3;

  for (let round = 0; round < totalRounds; round += 1) {
    const [question, answer] = game.prepareGame();
    console.log(`Question: ${question}`);
    const playerInput = readlineSync.question('Your answer: ');
    if (playerInput !== answer) {
      console.log(`'${playerInput}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`);
};
