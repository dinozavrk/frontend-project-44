#!/usr/bin/env node

import runGame from '../src/index.js';
import getGameData from '../src/games/even.js';

runGame('Answer "yes" if the number is even, otherwise answer "no".', getGameData);
