#!/usr/bin/env node

import readlineSync from 'readline-sync';
import runEven from '../src/games/even.js';
import runCalc from '../src/games/calc.js';
import runGcd from '../src/games/gcd.js';
import runProgression from '../src/games/progression.js';
import runPrime from '../src/games/prime.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('\nChoose a game:');
console.log('1. Even or Odd');
console.log('2. Calculator');
console.log('3. GCD');
console.log('4. Progression');
console.log('5. Prime');
console.log('0. Exit');

const gameChoice = readlineSync.question('\nEnter your choice (0-5): ');

switch (gameChoice) {
  case '1':
    runEven(userName);
    break;
  case '2':
    runCalc(userName);
    break;
  case '3':
    runGcd(userName);
    break;
  case '4':
    runProgression(userName);
    break;
  case '5':
    runPrime(userName);
    break;
  case '0':
    console.log('Goodbye!');
    break;
  default:
    console.log('Invalid choice.');
}
