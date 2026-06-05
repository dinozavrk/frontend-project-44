import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const findGcd = (a, b) => {
  if (b === 0) return Math.abs(a);
  return findGcd(b, a % b);
};

export default function runGame(userName) {
  console.log('\nGame: Greatest Common Divisor (GCD)');
  console.log('Find the greatest common divisor of given numbers.\n');

  for (let round = 0; round < ROUNDS_COUNT; round += 1) {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    const correctAnswer = String(findGcd(num1, num2));

    console.log(`Question: ${num1} ${num2}`);
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
