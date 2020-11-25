import { cons } from '@hexlet/pairs';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const makeGame = (description, body) => cons(description, body);

export { generateRandomNumber, makeGame };
