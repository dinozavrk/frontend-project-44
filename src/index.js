import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

export default function runGame(gameDescription, getGameData) {
  console.log('Добро пожаловать в Brain Games!');
  const userName = readlineSync.question('Как вас зовут? ');
  console.log(`Привет, ${userName}!`);
  console.log(gameDescription);

  for (let round = 0; round < ROUNDS_COUNT; round += 1) {
    const { question, correctAnswer } = getGameData();
    console.log(`Вопрос: ${question}`);
    const userAnswer = readlineSync.question('Ваш ответ: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' - неправильный ответ ;( Правильный ответ был '${correctAnswer}'.`);
      console.log(`Давай попробуем еще раз, ${userName}!`);
      return;
    }
    console.log('Правильно!');
  }

  console.log(`Поздравляю, ${userName}!`);
}