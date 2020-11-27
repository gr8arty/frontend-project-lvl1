const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const makeQuestion = (question) => console.log(`Question: ${question}`);

export { generateRandomNumber, makeQuestion };
