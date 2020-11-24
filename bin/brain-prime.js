#!/usr/bin/env node
import { gameDescription, gameBody } from '../src/games/primeGame.js';
import runGame from '../src/index.js';

runGame(gameDescription, gameBody);
