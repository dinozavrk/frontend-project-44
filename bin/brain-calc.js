#!/usr/bin/env node

import runGame from '../src/index.js';
import getGameData from '../src/games/calc.js';

runGame('What is the result of the expression?', getGameData);
