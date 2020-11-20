#!/usr/bin/env node
import { gameDescription, gameBody } from '../games/calcGame.js';
import { runGame } from '../src/index.js';

runGame(gameDescription, gameBody);
