import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

const isEven = (num) => num % 2 === 0;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default function runGame(userName) {
  console.log('\nGame: Even or Odd');
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

  for (let round = 0; round < ROUNDS_COUNT; round += 1) {
    const number = getRandomNumber(1, 100);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    
    console.log(`Question: ${number}`);
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
