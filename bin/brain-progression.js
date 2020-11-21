#!/usr/bin/env node
import { gameDescription, gameBody } from '../games/progressionGame.js';
import { runGame } from '../src/index.js';

runGame(gameDescription, gameBody);
