import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default function runGame(userName) {
  console.log('\nGame: Arithmetic Progression');
  console.log('What number is missing in the progression?\n');

  for (let round = 0; round < ROUNDS_COUNT; round += 1) {
    const length = 10;
    const start = getRandomNumber(1, 50);
    const step = getRandomNumber(1, 10);
    const hiddenIndex = getRandomNumber(0, length - 1);

    const progression = [];
    let correctAnswer = '';

    for (let i = 0; i < length; i += 1) {
      const value = start + i * step;
      if (i === hiddenIndex) {
        progression.push('..');
        correctAnswer = String(value);
      } else {
        progression.push(String(value));
      }
    }

    const question = progression.join(' ');
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!\n`);
      return;
    }
    console.log('Correct!\n');
  }

  console.log(`Congratulations, ${userName}! You won the game!\n`);
}
