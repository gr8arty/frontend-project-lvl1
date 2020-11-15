const gameRounds = 3;

const printResultMessage = (state, userName) => {
  console.log(state ? `Congratulation, ${userName}!` : `Let's try again, ${userName}!`);
};

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export { generateRandomNumber, gameRounds, printResultMessage };
