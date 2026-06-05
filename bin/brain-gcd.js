#!/usr/bin/env node

import runGame from '../src/index.js';
import getGameData from '../src/games/gcd.js';

runGame('Find the greatest common divisor of given numbers.', getGameData);
