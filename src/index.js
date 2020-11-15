const gameRounds = 3;

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export { generateRandomNumber, gameRounds };
