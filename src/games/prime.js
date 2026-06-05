import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

export default function runGame(userName) {
  console.log('\nGame: Prime Number');
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');

  for (let round = 0; round < ROUNDS_COUNT; round += 1) {
    const number = getRandomNumber(1, 100);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

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
