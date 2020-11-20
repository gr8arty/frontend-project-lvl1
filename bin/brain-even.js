#!/usr/bin/env node
import { gameDescription, gameBody } from '../games/evenGame.js';
import { runGame } from '../src/index.js';

runGame(gameDescription, gameBody);
