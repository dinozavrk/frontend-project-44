import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const operations = [
  { symbol: '+', calculate: (a, b) => a + b },
  { symbol: '-', calculate: (a, b) => a - b },
  { symbol: '*', calculate: (a, b) => a * b },
];

export default function runGame(userName) {
  console.log('\nGame: Calculator');
  console.log('What is the result of the expression?\n');

  for (let round = 0; round < ROUNDS_COUNT; round += 1) {
    const num1 = getRandomNumber(1, 30);
    const num2 = getRandomNumber(1, 30);
    const operation = operations[getRandomNumber(0, operations.length - 1)];
    const question = `${num1} ${operation.symbol} ${num2}`;
    const correctAnswer = String(operation.calculate(num1, num2));

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
