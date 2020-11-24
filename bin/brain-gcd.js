#!/usr/bin/env node
import { gameDescription, gameBody } from '../src/games/gcdGame.js';
import runGame from '../src/index.js';

runGame(gameDescription, gameBody);
